import { Navigate, Route, Routes } from "react-router-dom";
import { CadastrarChocadeiraPage, HomePage, IncubacaoPage, ListagemChocadeiraPage, ListagemIncubacaoPage } from "../pages";


export const AppRoutes = () => {

    return (
        <Routes>
            <Route path="/home" element={<HomePage />} />
            <Route path="/chocadeira" element={<ListagemChocadeiraPage />} />
            <Route path="/chocadeira/cadastro" element={<CadastrarChocadeiraPage />} />
            <Route path="/chocadeira/editar/:id" element={<CadastrarChocadeiraPage />} />
            <Route path="/incubacao" element={<ListagemIncubacaoPage />} />
            <Route path="/suporte" element={<IncubacaoPage />} />
            <Route path="*" element={<Navigate to="/suporte" />} />
        </Routes>
    );
};