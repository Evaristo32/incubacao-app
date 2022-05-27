import AddIcon from '@mui/icons-material/Add';
import { useTheme } from "@mui/material";
import { Box } from "@mui/system";
import { useNavigate } from 'react-router-dom';
import { ChocadeiraTabelaComponent, FiltrarChocadeiraComponent } from "../../shared/components";
import { SinglePage } from "../../shared/layouts";


export const ListagemChocadeiraPage = () => {

    const theme = useTheme();
    const navigate = useNavigate();

    const breadcrumb = {
        paths: [
            { rota: "Home", path: "home", rotaAtual: false },
            { rota: "Chocadeira", path: "chocadeira", rotaAtual: true }
        ]
    }

    const onClickAdicionar = () => navigate('/chocadeira/cadastro');

    const onClickVoltar = () => navigate('/home');

    return (
        <SinglePage breadcrumb={breadcrumb} titulo="Pesquisar Chocadeira"
            mostrarSubmit onClickSubmit={onClickAdicionar} nomeSubmit="Nova" iconSubmit={<AddIcon />}
            mostarVoltar onClickVoltar={onClickVoltar}  >
            <Box>
                <FiltrarChocadeiraComponent />
            </Box>

            <Box marginTop={theme.spacing(5)} marginBottom={theme.spacing(5)}>
                <ChocadeiraTabelaComponent />
            </Box>
        </SinglePage>
    );
}

