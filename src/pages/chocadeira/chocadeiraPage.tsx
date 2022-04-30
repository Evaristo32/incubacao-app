import { Button, Grid, TextField, useMediaQuery, useTheme } from "@mui/material";
import { Box } from "@mui/system";
import { SinglePage } from "../../shared/layouts";


export const ChocadeiraPage = () => {

    const theme = useTheme();
    const smDown = useMediaQuery(theme.breakpoints.down("sm"));


    const breadcrumb = {
        paths: [
            {
                rota: "Home",
                path: "home",
                rotaAtual: false
            },
            {
                rota: "Chocadeira",
                path: "chocadeira",
                rotaAtual: true
            }
        ]
    }

    return (

        <SinglePage breadcrumb={breadcrumb} titulo="Chocadeira">

            <Box>

                <Grid container rowSpacing={4} spacing={2}>
                    <Grid item xs={12} md={6}>
                        <TextField id="codigo" label="Código" variant="standard" fullWidth={!smDown} />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <TextField id="marca" label="Marca" variant="standard" fullWidth={!smDown} />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <TextField id="capacidadeTotal" label="Capacidade Total De Ovos" variant="standard" fullWidth={!smDown} />
                    </Grid>
                </Grid>


                <Grid marginTop={4}>
                    <Grid item xs={12}>
                        <Button variant="contained">Pesquisar</Button>
                    </Grid>
                </Grid>


            </Box>

            <Box>
            </Box>

        </SinglePage>

    );
}