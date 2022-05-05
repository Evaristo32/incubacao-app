import { Box, Grid, TextField } from "@mui/material";


export const FormularioChocadeiraComponent = () => {

    return (

        <Box>
            <Grid container rowSpacing={4} spacing={2}>
                <Grid item xs={12} md={6}>
                    <TextField id="codigo" label="Código" variant="standard" fullWidth />
                </Grid>

                <Grid item xs={12} md={6}>
                    <TextField id="marca" label="Marca" variant="standard" fullWidth />
                </Grid>

                <Grid item xs={12} md={6}>
                    <TextField id="capacidadeTotal" label="Capacidade Total De Ovos" variant="standard" fullWidth />
                </Grid>

            </Grid>
        </Box>
    );

}