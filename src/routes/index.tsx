import { Navigate, Route, Routes } from "react-router-dom";
import { CadastrarChocadeiraPage, HomePage, IncubacaoPage, ListagemChocadeiraPage } from "../pages";


export const AppRoutes = () => {

    return (
        <Routes>
            <Route path="/home" element={<HomePage />} />
            <Route path="/chocadeira" element={<ListagemChocadeiraPage />} />
            <Route path="/chocadeira/cadastro" element={<CadastrarChocadeiraPage />} />
            <Route path="/incubacao" element={<IncubacaoPage />} />
            <Route path="/suporte" element={<IncubacaoPage />} />
            <Route path="*" element={<Navigate to="/suporte" />} />
        </Routes>
    );
};