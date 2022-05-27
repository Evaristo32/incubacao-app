import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { FormularioIncubacaoComponent } from "../../shared/components";
import { SinglePage } from "../../shared/layouts";


export const ListagemIncubacaoPage = () => {

    const navigate = useNavigate();

    const breadcrumb = {
        paths: [
            { rota: "Home", path: "home", rotaAtual: false },
            { rota: "Incubação", path: "incubacao", rotaAtual: true }
        ]
    }

    const onClickVoltar = () => navigate('/home');

    return (
        <SinglePage breadcrumb={breadcrumb} titulo={"Pesquisar Incubação"}
            mostarVoltar onClickVoltar={onClickVoltar}>
            <Box>
                <FormularioIncubacaoComponent></FormularioIncubacaoComponent>
            </Box>
        </SinglePage>
    );
}