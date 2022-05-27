import { useNavigate } from "react-router-dom";
import { SinglePage } from "../../shared/layouts";


export const IncubacaoPage = () => {
   
    const navigate = useNavigate();
    
    const breadcrumb = {
        paths: [
            { rota: "Home", path: "home", rotaAtual: false },
            { rota: "Incubação", path: "incubacao", rotaAtual: true }
        ]
    }

    const onClickVoltar = () => navigate('/home');

    return (
        <SinglePage breadcrumb={breadcrumb} titulo={"Cadastrar Incubação"}
            mostarVoltar onClickVoltar={onClickVoltar}>
            {/* <Box>
                <FormularioChocadeiraComponent id={id} onClickSubmit={onClickSubmit}></FormularioChocadeiraComponent>
            </Box> */}
        </SinglePage>
    );
}