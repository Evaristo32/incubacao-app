import { Box, Grid, MenuItem, TextField } from "@mui/material";
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import * as yup from 'yup';
import { ChocadeiraService } from '../../services/apis/chocadeira/chocadeiraService';
import { TChocadeira } from "../../services/apis/model/types";


interface ChocadeirasLabel {
    value: string;
    label: string;
}

interface Props {
    id?: string;
    onClickSubmit?: (values: TChocadeira) => void;
}

export const FormularioIncubacaoComponent: React.FC<Props> = ({ id, onClickSubmit }) => {

    const [chocadeiras, setChocadeiras] = useState<TChocadeira[]>([]);

    const initialValues = {
        id: undefined,
        chocadeira: undefined,
        dataIncubacao: undefined,
        dataOvoscopia: undefined,
        dataEclosao: undefined,
        itens: []
    }

    const incubacaoSchema = yup.object().shape({
        chocadeira: yup
            .object()
            .required('O campo é obrigatório.'),
        dataIncubacao: yup
            .date()
            .required('O campo é obrigatório.').max(10),
        itens: yup
            .array()
            .required('O campo é obrigatório.')
    });

    const formik = useFormik({
        initialValues: initialValues,
        validationSchema: incubacaoSchema,
        onSubmit: (values) => {
            onClickSubmit?.(values);
        },
    });

    useEffect(() => {
        ChocadeiraService.getAll()
            .then((result) => {
                if (result instanceof Error) {
                    alert(result.message);
                    return;
                }

                setChocadeiras(result);
                // formik.setValues({...initialValues,  ...result });
                // console.log(resultLabel);
            });
    }, []);


    return (
        <Box>
            <form noValidate onSubmit={formik.handleSubmit}>
                <Grid container rowSpacing={4} spacing={2}>
                    <Grid item xs={12} md={6}>

                        <TextField
                            id="chocadeira"
                            select
                            label="Chocadeira"
                            value={formik.values.chocadeira}
                            onChange={formik.handleChange}
                            fullWidth
                            variant="standard"
                        >

                            {
                                chocadeiras.map((option) =>
                                    <MenuItem key={option.id} value={option.id}>{option.codigo} - {option.marca}</MenuItem>
                                )
                            }
                        </TextField>

                    </Grid>
                </Grid>
            </form>
        </Box>
    );

}