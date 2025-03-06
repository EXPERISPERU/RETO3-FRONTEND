import { Navigate, Outlet, Route, Routes } from "react-router";
import { LoginPage } from "../modules/auth/pages/LoginPage";
import { LayoutAdministradorPage } from "../modules/layout/page/LayoutAdministradorPage";
import { DashboardPage } from "../modules/dashboard/pages/DashboardPage";
import { CheckingAuth } from "../modules/components";
import { useCheckAuth } from "../../hooks/useCheckAuth";


export const AdminRoutes = () => {

    const status = useCheckAuth();

    if ( status === 'checking' ) {
      return <CheckingAuth />
    }

    console.log(status);

    return (
        <Routes>
            {status === 'authenticated' ? (
                <>
                    <Route path="/dashboard" element={<LayoutAdministradorPage> <Outlet /> </LayoutAdministradorPage>} >
                        <Route path="" element={<DashboardPage />} />
                    </Route>
                </>
            ) : (
                <>
                    <Route path="/auth/*" element={<LoginPage />} />
                </>
            )}

            {/* Redirección por defecto para cualquier ruta no definida */}
            <Route path="*" element={<Navigate to={status === 'authenticated' ? "/dashboard" : "/auth/login"} />} />
        </Routes>
    )
}
