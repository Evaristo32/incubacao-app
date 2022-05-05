import { useMediaQuery, useTheme } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import { ChocadeiraTabelaComponent, FiltrarChocadeiraComponent, FormularioChocadeiraComponent } from "../../shared/components";
import { SinglePage } from "../../shared/layouts";
import { ChocadeiraService } from "../../shared/services/apis/chocadeira/chocadeiraService";
import { TChocadeira } from "../../shared/services/apis/model/types";
import { useNavigate } from 'react-router-dom';

export const CadastrarChocadeiraPage = () => {

    const theme = useTheme();
    const smDown = useMediaQuery(theme.breakpoints.down("sm"));
    const [chicadeiras, setChocadeiras] = useState<TChocadeira[]>([]);
    const navigate = useNavigate();

    useEffect(() => {
        ChocadeiraService.getAll()
            .then((result) => {
                if (result instanceof Error) {
                    alert(result.message);
                    return;
                }
                setChocadeiras(result);
            });
    }, [])

    const breadcrumb = {
        paths: [
            { rota: "Home", path: "home", rotaAtual: false },
            { rota: "Chocadeira", path: "chocadeira", rotaAtual: false },
            { rota: "Cadastro", path: "cadastro", rotaAtual: true }
        ]
    }

    const onClickAdicionar = () => navigate('/chocadeira/cadastro');


    return (
        <SinglePage breadcrumb={breadcrumb} titulo="Cadastrar Chocadeira" adiciona onSubmit={onClickAdicionar} nomeBotao="Salvar">
            <Box>
                <FormularioChocadeiraComponent></FormularioChocadeiraComponent>
            </Box>
        </SinglePage>
    );
}

