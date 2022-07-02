import AddIcon from '@mui/icons-material/Add';
import SaveIcon from '@mui/icons-material/Save';
import { Box, Button, Divider, Fab, Grid, MenuItem, TextField } from "@mui/material";
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import * as yup from 'yup';
import { ChocadeiraService } from '../../../services/apis/chocadeira/chocadeiraService';
import { TCadastroIncubacao, TChocadeira, TIncubacao, TItemIncubacao, TRaca } from "../../../services/apis/model/types";
import { RacaService } from "../../../services/apis/raca/racaService";
import { ItemIncubacaoTabelaComponent } from "../../tabelas/item-incubacao/itemIncubacaoTabelaComponent";

interface Props {
    id?: string;
    onClickSubmit?: (values: TCadastroIncubacao) => void;
}

export const FormularioIncubacaoComponent: React.FC<Props> = ({ onClickSubmit }) => {

    const [chocadeiras, setChocadeiras] = useState<TChocadeira[]>([]);
    const [racas, setRacas] = useState<TRaca[]>([]);
    const [chocadeiraSelecionada, setChocadeira] = useState<TChocadeira>({});
    const [item, setItem] = useState({ 'raca': 0, 'quantidade': 0 });
    const [itens, setItens] = useState<TItemIncubacao[]>([]);

    const initialValues = {
        id: undefined,
        chocadeira: 0,
        dataIncubacao: new Date(),
        dataOvoscopia: undefined,
        dataEclosao: undefined,
        itens: []
    }

    const incubacaoSchema = yup.object().shape({
    });

    const formik = useFormik({
        initialValues: initialValues,
        validationSchema: incubacaoSchema,
        onSubmit: (values) => {

            const obj: TCadastroIncubacao = {
                idChocadeira: values.chocadeira,
                inicio: values.dataIncubacao,
                itens: []
            }

            itens.forEach((i) => obj.itens?.push({ idRaca: i.raca?.id, quantidade: i.quantidade }));

            onClickSubmit?.(obj);
        }
    });

    useEffect(() => {
        buscarChocadeiras();
        buscarRacas();
    }, []);

    const buscarChocadeiras = () => {
        ChocadeiraService.getAll()
            .then((result) => {
                if (result instanceof Error) {
                    alert(result.message);
                    return;
                }

                setChocadeiras(result);
            });
    }

    const buscarRacas = () => {
        RacaService.getAll()
            .then((result) => {
                if (result instanceof Error) {
                    alert(result.message);
                    return;
                }

                setRacas(result);
            });
    }

    const selectChocadeira = (event: React.ChangeEvent<HTMLInputElement>) => {
        const chocadeiraSelecionada = chocadeiras.find(c => c.id == Number(event.target.value))
        const chocadeiraTemp: TChocadeira = {
            id: chocadeiraSelecionada?.id,
            codigo: chocadeiraSelecionada?.codigo,
            marca: chocadeiraSelecionada?.marca,
            capacidadeTotal: chocadeiraSelecionada?.capacidadeTotal
        };
        setChocadeira(chocadeiraTemp);
        formik.setFieldValue('chocadeira', chocadeiraTemp.id);
    }

    const addItem = () => {
        const racaSelecionada = racas.find(r => r.id == item.raca)
        const itemIncubacao: TItemIncubacao = { id: undefined, raca: racaSelecionada, quantidade: Number(item.quantidade) };

        setItens([...itens, itemIncubacao]);
        setItem({ 'raca': 0, 'quantidade': 0 });
    }

    const setDadosItem = (event: React.ChangeEvent<HTMLInputElement>) => {
        setItem({ ...item, [event.target.name]: event.target.value });
    }

    return (
        <Box>
            <form onSubmit={formik.handleSubmit} noValidate>
                <Grid container rowSpacing={4} spacing={6}>

                    <Grid item xs={12} md={6}>

                        <TextField
                            id="chocadeira"
                            select
                            label="Chocadeira"
                            value={formik.values.chocadeira}
                            onChange={selectChocadeira}
                            fullWidth
                            variant="standard">
                            {
                                chocadeiras.map((option) =>
                                    <MenuItem key={option.id} value={option.id}>{option.codigo} - {option.marca}</MenuItem>
                                )
                            }
                        </TextField>

                    </Grid>


                    <Grid item xs={12} md={4}>
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <DatePicker
                                label="Inicio Incubação"
                                value={formik.values.dataIncubacao}
                                onChange={(newValue) => { formik.setFieldValue("dataIncubacao", newValue); }}
                                renderInput={(params) => <TextField fullWidth variant="standard" {...params} onChange={formik.handleChange} onBlur={formik.handleBlur} />}
                            />
                        </LocalizationProvider>
                    </Grid>

                    <Grid item xs={12} >
                        <h2>Itens Da Incubação</h2>
                        <Divider />
                    </Grid>

                    <Grid item xs={12} md={6}>

                        <TextField
                            id="raca"
                            name="raca"
                            select
                            label="Raça"
                            value={item.raca}
                            onChange={setDadosItem}
                            fullWidth
                            variant="standard"
                        >
                            {
                                racas.map((option) =>
                                    <MenuItem key={option.id} value={option.id}>{option.nome}</MenuItem>
                                )
                            }
                        </TextField>

                    </Grid>

                    <Grid item xs={12} md={4}>
                        <TextField
                            id="quantidade"
                            name="quantidade"
                            label="QTE Ovos"
                            type="number"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            variant="standard" fullWidth
                            onBlur={formik.handleBlur} onChange={setDadosItem} value={item.quantidade} />
                    </Grid>

                    <Grid item xs={12} md={2}>
                        <Fab color="primary" aria-label="add" onClick={addItem}>
                            <AddIcon />
                        </Fab>
                    </Grid>

                    <Grid item xs={12}>
                        <span>
                            <h2>Quantidade maxima de ovos {chocadeiraSelecionada.capacidadeTotal}</h2>
                        </span>
                        <ItemIncubacaoTabelaComponent data={itens} />
                    </Grid>

                    <Grid item xs={12} md={12}>
                        <Button type="submit" variant="contained" endIcon={<SaveIcon />}>Salvar</Button>
                    </Grid>

                </Grid>

            </form>
        </Box>
    );

}