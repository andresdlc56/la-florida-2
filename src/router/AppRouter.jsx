import { Route, Routes } from "react-router-dom";


import { Navbar } from "../ui";
import { HomeRoutes } from "../home/routes/HomeRoutes";


export const AppRouter = () => {
    return (
        <>
            <Navbar />

            <Routes>
                <Route path="/*" element={ <HomeRoutes /> } />
            </Routes>
        </>
    )
}
