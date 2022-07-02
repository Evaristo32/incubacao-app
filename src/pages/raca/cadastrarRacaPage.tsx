import { Box } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { FormularioRacaComponent } from "../../shared/components/formulario/raca/formularioRacaComponent";
import { SinglePage } from "../../shared/layouts";
import { TRaca } from "../../shared/services/apis/model/types";
import { RacaService } from "../../shared/services/apis/raca/racaService";


export const CadastrarRacaPage = () => {

    const navigate = useNavigate();
    const { id = undefined } = useParams<string>();

    const breadcrumb = {
        paths: [
            { rota: "Home", path: "home", rotaAtual: false },
            { rota: "Raça", path: "/raca", rotaAtual: false },
            id ? { rota: "Editar", path: "editar", rotaAtual: true } : { rota: "Cadastro", path: "cadastro", rotaAtual: true }
        ]
    }

    const onClickSubmit = (raca: TRaca) => {

        if (raca.id) {
            RacaService.update(raca)
                .then((result) => {
                    if (result instanceof Error) {
                        alert(result.message);
                        return;
                    }
                    navigate('/raca');
                });
            return;
        }
        RacaService.save(raca)
            .then((result) => {
                if (result instanceof Error) {
                    alert(result.message);
                    return;
                }
                navigate('/raca');
            });

    }

    const onClickVoltar = () => navigate('/raca');

    return (
        <SinglePage breadcrumb={breadcrumb} titulo={id ? "Editar Raça" : "Cadastrar Raça"}
            mostarVoltar onClickVoltar={onClickVoltar}>
            <Box>
                <FormularioRacaComponent id={id} onClickSubmit={onClickSubmit}></FormularioRacaComponent>
            </Box>
        </SinglePage>
    );
}