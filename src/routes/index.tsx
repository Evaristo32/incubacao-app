import { Navigate, Route, Routes } from "react-router-dom";
import { ChocadeiraPage, HomePage, IncubacaoPage } from "../pages";


export const AppRoutes = () => {

    return (
        <Routes>
            <Route path="/home" element={<HomePage />} />
            <Route path="/chocadeira" element={<ChocadeiraPage />} />
            <Route path="/incubacao" element={<IncubacaoPage />} />
            <Route path="/suporte" element={<IncubacaoPage />} />
            <Route path="*" element={<Navigate to="/suporte" />} />
        </Routes>
    );
};