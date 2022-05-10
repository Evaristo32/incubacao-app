import SaveIcon from '@mui/icons-material/Save';
import { Box, Button, Grid, TextField } from "@mui/material";
import { useFormik } from "formik";
import { useEffect } from "react";
import * as yup from 'yup';
import { ChocadeiraService } from '../../services/apis/chocadeira/chocadeiraService';
import { TChocadeira } from "../../services/apis/model/types";



interface Props {
    id?: string;
    onClickSubmit?: (values: TChocadeira) => void;
}

export const FormularioChocadeiraComponent: React.FC<Props> = ({ id, onClickSubmit }) => {

    const initialValues: TChocadeira = { id: undefined, codigo: '', marca: '', capacidadeTotal: undefined };

    const chocadeiraSchema = yup.object().shape({
        codigo: yup
            .string()
            .required().max(6),
        marca: yup
            .string()
            .required().min(5).max(50),
        capacidadeTotal: yup
            .number()
            .required()
            .positive()
            .integer()
    });

    const formik = useFormik({
        initialValues: initialValues,
        validationSchema: chocadeiraSchema,
        onSubmit: (values) => {
            onClickSubmit?.(values);
        },
    });

    useEffect(() => {
        if (id) {

            ChocadeiraService.getById(parseInt(id))
                .then((result) => {
                    if (result instanceof Error) {
                        alert(result.message);
                        return;
                    }
                    formik.setValues({ ...result });
                    console.log(result);
                });

        }
    }, []);


    return (
        <Box>
            <form noValidate onSubmit={formik.handleSubmit}>
                <Grid container rowSpacing={4} spacing={2}>
                    <Grid item xs={12} md={6}>
                        <TextField id="codigo"
                            name="codigo" label="Código"
                            error={formik.errors.codigo !== '' && formik.touched.codigo} helperText={formik.errors.codigo !== '' && formik.touched.codigo ? formik.errors.codigo : ''}
                            variant="standard" fullWidth
                            onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.codigo} />
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <TextField id="marca" name="marca" label="Marca"
                            error={formik.errors.marca !== '' && formik.touched.marca} helperText={formik.errors.marca !== '' && formik.touched.marca ? formik.errors.marca : ''}
                            variant="standard" fullWidth
                            onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.marca} />
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <TextField
                            id="capacidadeTotal"
                            name="capacidadeTotal"
                            label="Capacidade Total De Ovos"
                            type="number"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            error={formik.errors.capacidadeTotal !== '' && formik.touched.capacidadeTotal} helperText={formik.errors.capacidadeTotal !== '' && formik.touched.capacidadeTotal ? formik.errors.capacidadeTotal : ''}
                            variant="standard" fullWidth
                            onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.capacidadeTotal} />
                    </Grid>

                    <Grid item xs={12} md={12}>
                        <Button type="submit" variant="contained" endIcon={<SaveIcon />}>Salvar</Button>
                    </Grid>
                </Grid>
            </form>
        </Box>
    );

}