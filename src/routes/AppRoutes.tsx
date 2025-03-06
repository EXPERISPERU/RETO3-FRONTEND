
import { Route, Routes } from "react-router";
import { AdminRoutes } from "../admin/routes/AdminRoutes";

export const AppRoutes = () => {
    return (
        <Routes>
            {/* lOGIN Y REGISTRO */}
            {/* Subrutas que se renderizan dentro de LayoutPage */}
            <Route path="/*" element={ <AdminRoutes /> }></Route>
        </Routes>
    )
}
