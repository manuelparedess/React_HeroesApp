import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth/authContext';
import { useForm } from '../../hooks/useForm';
import { types } from '../../types/types';


export const LoginScreen = () => {

    // El useNavigate se utiliza para redirigir pero con
    // otras propiedades.
    const navigate = useNavigate();
    const { dispatch } = useContext(AuthContext);

    const [values, handleInputChange] = useForm({
        userName: ''
    });
    const { userName } = values;
    const [isValid, setIsValid] = useState(true);

    const handleLogin = () => {

        if(userName === '') {
            setIsValid(false)
        } else {
            setIsValid(true);

            const action = {
                type: types.login,
                payload: {
                    name: userName
                }
            }
    
            dispatch(action);
    
            const lastPath = localStorage.getItem('lastPath') || '/marvel'
    
            navigate(lastPath, {
                replace: true
            });

        }
    }

    return (
        <div className="container mt-5">
            <h1>Login</h1>
            <hr />

            <input
                type='text'
                placeholder='Nombre...'
                className={`form-control w-25 ${!isValid && 'is-invalid'}`}
                name="userName"
                autoComplete="off"
                value={userName}
                onChange={handleInputChange}
            />

            <button
                type="button"
                onClick={handleLogin}
                className="btn btn-primary mt-3"
            >
                Login
            </button>

        </div>
    )
}
