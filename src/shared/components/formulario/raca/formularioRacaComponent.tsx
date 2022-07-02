import SaveIcon from '@mui/icons-material/Save';
import { Box, Button, Grid, TextField } from "@mui/material";
import { useFormik } from "formik";
import { useEffect } from "react";
import * as yup from 'yup';
import { TRaca } from "../../../services/apis/model/types";
import { RacaService } from '../../../services/apis/raca/racaService';



interface Props {
    id?: string;
    onClickSubmit?: (values: TRaca) => void;
}

export const FormularioRacaComponent: React.FC<Props> = ({ id, onClickSubmit }) => {

    const initialValues: TRaca = { id: undefined, nome: '', descricao: '' };

    const schemaForm = yup.object().shape({
        nome: yup
            .string()
            .required('O campo é obrigatório.')
            .min(5, 'O campode deve conter no minimo 5 caracteres!!!')
            .max(30, 'O campode deve conter no maxímo 30 caracteres!!!')
        ,
        descricao: yup
            .string()
            .required('O campo é obrigatório.')
            .max(500, 'O campode deve conter no maxímo 50 caracteres!!!')
    });

    const formik = useFormik({
        initialValues: initialValues,
        validationSchema: schemaForm,
        onSubmit: (values) => {
            onClickSubmit?.(values);
        },
    });

    useEffect(() => {
        if (id) {
            RacaService.getById(parseInt(id))
                .then((result) => {
                    if (result instanceof Error) {
                        alert(result.message);
                        return;
                    }
                    formik.setValues({ ...result });
                });
        }
    }, []);


    return (
        <Box>
            <form noValidate onSubmit={formik.handleSubmit}>
                <Grid container rowSpacing={4} spacing={2}>
                    <Grid item xs={12} md={8}>
                        <TextField id="codigo"
                            name="nome" label="Nome"
                            error={formik.errors.nome !== '' && formik.touched.nome} helperText={formik.errors.nome !== '' && formik.touched.nome ? formik.errors.nome : ''}
                            inputProps={{ maxLength: 30 }}
                            variant="standard" fullWidth
                            onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.nome} />
                    </Grid>

                    <Grid item xs={12} >
                        <TextField id="descricao" name="descricao" label="Descrição"
                            error={formik.errors.descricao !== '' && formik.touched.descricao} helperText={formik.errors.descricao !== '' && formik.touched.descricao ? formik.errors.descricao : ''}
                            variant="standard" fullWidth
                            inputProps={{ maxLength: 500 }}
                            multiline
                            rows={5}
                            onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.descricao} />
                    </Grid>

                    <Grid item xs={12} md={12}>
                        <Button type="submit" variant="contained" endIcon={<SaveIcon />}>Salvar</Button>
                    </Grid>
                </Grid>
            </form>
        </Box>
    );

}