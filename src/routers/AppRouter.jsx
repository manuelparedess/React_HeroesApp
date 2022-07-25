import { Routes, Route } from "react-router-dom";
import { LoginScreen } from "../components/login/LoginScreen";

import { DashboardRoutes } from "./DashboardRoutes";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";




export const AppRouter = () => {
    return (
        <Routes>

            {/* RUTAS PRIVADAS */}

            {/* DashboardRoutes contiene las rutas hijas */}
            <Route path="/*" element={
                <PrivateRoute>
                    <DashboardRoutes />
                </PrivateRoute>
            }
            />
            {/* <Route path="/*" element={ <DashboardRoutes /> }/> */}


            {/* RUTAS PUBLICAS */}

            <Route path="/login" element={
                <PublicRoute>
                    <LoginScreen />
                </PublicRoute>
            } 
            />
            {/* <Route path="/login" element={<LoginScreen />} /> */}
        </Routes>
    )
}
