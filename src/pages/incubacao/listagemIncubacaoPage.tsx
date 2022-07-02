import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { FormularioIncubacaoComponent } from "../../shared/components";
import { SinglePage } from "../../shared/layouts";
import AddIcon from '@mui/icons-material/Add';
import { FiltroIncubacaoComponent } from "../../shared/components/formulario/incubacao/filtroIncubacaoComponent";


export const ListagemIncubacaoPage = () => {

    const navigate = useNavigate();

    const breadcrumb = {
        paths: [
            { rota: "Home", path: "home", rotaAtual: false },
            { rota: "Incubação", path: "incubacao", rotaAtual: true }
        ]
    }

    const onClickAdicionar = () => navigate('/incubacao/cadastro');
    const onClickVoltar = () => navigate('/home');

    return (

        <SinglePage breadcrumb={breadcrumb} titulo="Pesquisar Incubação"
            mostrarSubmit onClickSubmit={onClickAdicionar} nomeSubmit="Nova" iconSubmit={<AddIcon />}
            mostarVoltar onClickVoltar={onClickVoltar}  >
            <Box>
                <FiltroIncubacaoComponent />
            </Box>
        </SinglePage>
    );
}