import { useContext } from "react"
import { Navigate, useLocation } from "react-router-dom"
import { AuthContext } from "../auth/authContext"

                        //Como PrivateRoute es un higher order component(osea que
                        // tiene elementos hijos) la prop CHILDREN hace referencia
                        // a los elementos hijos
export const PrivateRoute = ({ children }) => {

    const { user } = useContext(AuthContext);

    const location = useLocation();

    localStorage.setItem('lastPath', `${location.pathname}${location.search}`)

    return user.logged
        ?   children
        :   <Navigate to='/login' />
}