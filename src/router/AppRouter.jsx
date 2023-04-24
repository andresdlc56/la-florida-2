import { Navigate, Route, Routes } from "react-router-dom";


//import { HomeRoutes } from "../home/routes/HomeRoutes";
import { HomePage, ProductosPage } from "../home/pages";


export const AppRouter = () => {
    return (
        <>
            <Routes>
                {/* <Route path="/" element={ <HomeRoutes /> } /> */}
                <Route path="/" element={ <HomePage /> } />
                <Route path="productos" element={ <ProductosPage /> } />

                {/* Ruta para cualquier url */}
                <Route path="/*" element={ <Navigate to="/" /> } />
            </Routes>
        </>
    )
}
