import { Box } from "@mui/system";
import { useNavigate, useParams } from 'react-router-dom';
import { FormularioChocadeiraComponent } from "../../shared/components";
import { SinglePage } from "../../shared/layouts";
import { ChocadeiraService } from "../../shared/services/apis/chocadeira/chocadeiraService";
import { TChocadeira } from "../../shared/services/apis/model/types";


export const CadastrarChocadeiraPage = () => {

    const navigate = useNavigate();
    const { id = '0' } = useParams<string>();

    const breadcrumb = {
        paths: [
            { rota: "Home", path: "home", rotaAtual: false },
            { rota: "Chocadeira", path: "/chocadeira", rotaAtual: false },
            id !== '0' ? { rota: "Editar", path: "editar", rotaAtual: true } : { rota: "Cadastro", path: "cadastro", rotaAtual: true }
        ]
    }

    const onClickSubmit = (chocadeira: TChocadeira) => {
        console.log(chocadeira);
        if (chocadeira.id) {
            ChocadeiraService.update(chocadeira)
                .then((result) => {
                    if (result instanceof Error) {
                        alert(result.message);
                        return;
                    }
                    navigate('/chocadeira');
                });
            return;
        }
        ChocadeiraService.save(chocadeira)
            .then((result) => {
                if (result instanceof Error) {
                    alert(result.message);
                    return;
                }
                navigate('/chocadeira');
            });

    }

    const onClickVoltar = () => navigate('/chocadeira');

    return (
        <SinglePage breadcrumb={breadcrumb} titulo={id !== '0' ? "Editar Chocadeira" : "Cadastrar Chocadeira"}
            mostarVoltar onClickVoltar={onClickVoltar}>
            <Box>
                <FormularioChocadeiraComponent id={id} onClickSubmit={onClickSubmit}></FormularioChocadeiraComponent>
            </Box>
        </SinglePage>
    );
}

