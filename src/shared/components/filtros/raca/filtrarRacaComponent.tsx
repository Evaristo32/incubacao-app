import { Box, Button, Grid, TextField, useTheme } from "@mui/material";



export const FiltrarRacaComponent = () => {

    const theme = useTheme();

    return (
        <Box>

            <Grid container rowSpacing={4} spacing={2}>
                <Grid item xs={12} md={6}>
                    <TextField id="nome" label="Nome" variant="standard" fullWidth />
                </Grid>
            </Grid>

            <Grid container rowSpacing={4} spacing={2} marginTop={theme.spacing(4)}>
                <Grid item xs={12}>
                    <Button variant="contained">Pesquisar</Button>
                </Grid>
            </Grid>

        </Box>
    );

}