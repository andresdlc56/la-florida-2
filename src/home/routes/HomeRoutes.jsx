import { Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { NosotrosPage } from "../pages/NosotrosPage";

export const HomeRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={ <HomePage /> } />
            <Route path="nosotros" element={ <NosotrosPage /> } />
        </Routes>
    )
}
