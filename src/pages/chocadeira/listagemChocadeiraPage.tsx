import AddIcon from '@mui/icons-material/Add';
import { useMediaQuery, useTheme } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { ChocadeiraTabelaComponent, FiltrarChocadeiraComponent } from "../../shared/components";
import { SinglePage } from "../../shared/layouts";
import { ChocadeiraService } from "../../shared/services/apis/chocadeira/chocadeiraService";
import { TChocadeira } from "../../shared/services/apis/model/types";


export const ListagemChocadeiraPage = () => {

    const theme = useTheme();
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
            { rota: "Chocadeira", path: "chocadeira", rotaAtual: true }
        ]
    }

    const onClickAdicionar = () => navigate('/chocadeira/cadastro');

    const onClickVoltar = () => navigate('/home');

    return (
        <SinglePage breadcrumb={breadcrumb} titulo="Pesquisar Chocadeira"
            mostrarSubmit onClickSubmit={onClickAdicionar} nomeSubmit="Nova" iconSubmit={<AddIcon/>}
            mostarVoltar onClickVoltar={onClickVoltar}  >
            <Box>
                <FiltrarChocadeiraComponent />
            </Box>

            <Box marginTop={theme.spacing(5)}  marginBottom={theme.spacing(5)}>
                <ChocadeiraTabelaComponent data={chicadeiras} />
            </Box>
        </SinglePage>
    );
}

