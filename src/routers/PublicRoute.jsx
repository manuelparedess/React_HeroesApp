import { useContext } from "react"
import { Navigate } from "react-router-dom";
import { AuthContext } from "../auth/authContext"


                        //Como PublicRoute es un higher order component(osea que
                        // tiene elementos hijos) la prop CHILDREN hace referencia
                        // a los elementos hijos
export const PublicRoute = ({children}) => {

    const { user } = useContext(AuthContext);

    return !user.logged
        ?   children
        :   <Navigate to='/' />
}