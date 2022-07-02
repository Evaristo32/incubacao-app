import AddIcon from '@mui/icons-material/Add';
import { Box, useTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { FiltrarRacaComponent, RacaTabelaComponent } from "../../shared/components";
import { SinglePage } from "../../shared/layouts";

export const ListagemRacaPage = () => {

    const theme = useTheme();
    const navigate = useNavigate();

    const breadcrumb = {
        paths: [
            { rota: "Home", path: "home", rotaAtual: false },
            { rota: "Raça", path: "raca", rotaAtual: true }
        ]
    }

    const onClickAdicionar = () => navigate('/raca/cadastro');

    const onClickVoltar = () => navigate('/home');

    return (

        <SinglePage breadcrumb={breadcrumb} titulo="Pesquisar Raça"
            mostrarSubmit onClickSubmit={onClickAdicionar} nomeSubmit="Nova" iconSubmit={<AddIcon />}
            mostarVoltar onClickVoltar={onClickVoltar}  >
            <Box>
                <FiltrarRacaComponent />
            </Box>

            <Box marginTop={theme.spacing(5)} marginBottom={theme.spacing(5)}>
                <RacaTabelaComponent />
            </Box>
        </SinglePage>
    );
}