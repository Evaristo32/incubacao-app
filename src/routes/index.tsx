import { Navigate, Route, Routes } from "react-router-dom";
import { CadastrarChocadeiraPage, CadastrarRacaPage, HomePage, CadastrarIncubacaoPage, ListagemChocadeiraPage, ListagemIncubacaoPage, ListagemRacaPage } from "../pages";


export const AppRoutes = () => {

    return (
        <Routes>
            <Route path="/home" element={<HomePage />} />
            <Route path="/raca" element={<ListagemRacaPage />} />
            <Route path="/raca/cadastro" element={<CadastrarRacaPage />} />
            <Route path="/raca/editar/:id" element={<CadastrarRacaPage />} />
            <Route path="/chocadeira" element={<ListagemChocadeiraPage />} />
            <Route path="/chocadeira/cadastro" element={<CadastrarChocadeiraPage />} />
            <Route path="/chocadeira/editar/:id" element={<CadastrarChocadeiraPage />} />
            <Route path="/incubacao" element={<ListagemIncubacaoPage />} />
            <Route path="/incubacao/cadastro" element={<CadastrarIncubacaoPage />} />
            <Route path="/suporte" element={<HomePage />} />
            <Route path="*" element={<Navigate to="/home" />} />
        </Routes>
    );
};