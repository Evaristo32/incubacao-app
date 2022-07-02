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
import { TCadastroIncubacao, TChocadeira, TFiltroIncubacao, TIncubacao, TItemIncubacao, TRaca } from "../../../services/apis/model/types";
import { RacaService } from "../../../services/apis/raca/racaService";
import { ItemIncubacaoTabelaComponent } from "../../tabelas/item-incubacao/itemIncubacaoTabelaComponent";

interface Props {
    id?: string;
    onClickSubmit?: (values: TCadastroIncubacao) => void;
}

export const FiltroIncubacaoComponent: React.FC<Props> = ({ onClickSubmit }) => {

    const [chocadeiras, setChocadeiras] = useState<TChocadeira[]>([]);
    const [racas, setRacas] = useState<TRaca[]>([]);
    const [filtro, setFiltro] = useState<TFiltroIncubacao>({});

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

    const setDados = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFiltro({ ...filtro, [event.target.name]: event.target.value });
    }

    const setData = (campo: string, data: Date| null | undefined) => {
        setFiltro({ ...filtro, [campo]: data });
    }

    return (
        <Box>
            <form noValidate>
                <Grid container rowSpacing={4} spacing={6}>

                    <Grid item xs={12} md={6}>

                        <TextField
                            id="chocadeira"
                            select
                            label="Chocadeira"
                            value={filtro.idChocadeira}
                            onChange={setDados}
                            fullWidth
                            variant="standard">
                            {
                                chocadeiras.map((option) =>
                                    <MenuItem key={option.id} value={option.id}>{option.codigo} - {option.marca}</MenuItem>
                                )
                            }
                        </TextField>

                    </Grid>

                    <Grid item xs={12} md={6}>

                        <TextField
                            id="raca"
                            name="raca"
                            select
                            label="Raça"
                            value={filtro.idRaca}
                            onChange={setDados}
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
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <DatePicker
                                label="Inicio Incubação"
                                value={filtro.inicio}
                                onChange={(newValue) => { setData("inicio", newValue); }}
                                renderInput={(params) => <TextField fullWidth variant="standard" {...params} onChange={setDados} />}
                            />
                        </LocalizationProvider>
                    </Grid>




                    <Grid item xs={12} md={12}>
                        <Button type="submit" variant="contained">Pesquisar</Button>
                    </Grid>

                </Grid>

            </form>
        </Box>
    );

}