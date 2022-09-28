import { AppRouter } from "../../routers/AppRouter"
import { AuthContext } from "../../auth/authContext";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

describe('Pruebas en AppRouter', () => {  

    test('debe de mostrar el login si el usuario no esta autenticado', () => {  

        const contextValue = {
            user: {
                logged: false
            }
        };

        render(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter initialEntries={['/']}>
                    <AppRouter />
                </MemoryRouter>
            </AuthContext.Provider>
        );


        expect( screen.getAllByText('Login').lenght ).not.toBe(0);

    })

    test('debe de mostrar el componente de Marvel si está autenticado', () => {  

        const contextValue = {
            user: {
                logged: true,
                name:'Pepe'
            }
        };

        render(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter initialEntries={['/login']}>
                    <AppRouter />
                </MemoryRouter>
            </AuthContext.Provider>
        );

        expect( screen.getByRole('marvel').lenght ).not.toBe(0);


    })

})