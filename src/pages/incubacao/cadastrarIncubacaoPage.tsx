import { useNavigate } from "react-router-dom";
import { FormularioIncubacaoComponent } from "../../shared/components";
import { SinglePage } from "../../shared/layouts";
import { IncubacaoService } from "../../shared/services/apis/incubacao/incubacaoService";
import { TCadastroIncubacao } from "../../shared/services/apis/model/types";


export const CadastrarIncubacaoPage = () => {

    const navigate = useNavigate();

    const breadcrumb = {
        paths: [
            { rota: "Home", path: "home", rotaAtual: false },
            { rota: "Incubação", path: "incubacao", rotaAtual: true }
        ]
    }

    const onClickVoltar = () => navigate('/incubacao');

    const onClickSubmit = (incubacao: TCadastroIncubacao) => {

        IncubacaoService.save(incubacao)
            .then((result) => {
                if (result instanceof Error) {
                    alert(result.message);
                    return;
                }
                navigate('/incubacao');
            });

    }


    return (
        <SinglePage breadcrumb={breadcrumb} titulo={"Cadastrar Incubação"}
            mostarVoltar onClickVoltar={onClickVoltar}>
            <FormularioIncubacaoComponent onClickSubmit={onClickSubmit}></FormularioIncubacaoComponent>
        </SinglePage>
    );
}