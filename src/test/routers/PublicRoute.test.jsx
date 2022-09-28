
import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom"
import { AuthContext } from '../../auth/authContext';
import { PublicRoute } from '../../routers/PublicRoute';



describe('Pruebas en PublicRoute', () => {  

    test('debe de mostrar el componente si NO esta autenticado', () => {  

        const contextValue = {
            user:{
                logged: false,
            }
        }

        render(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter initialEntries={['/login']}>
                    <PublicRoute>
                        <h1>PublicComponent</h1>
                    </PublicRoute>
                </MemoryRouter>
            </AuthContext.Provider>
        )

        expect( screen.getByText('PublicComponent') ).toBeTruthy();
    })


    test('debe de bloquear el componente si esta autenticado', () => {  

        const contextValue = {
            user:{
                logged: true,
                name: 'Manuel'
            }
        }

        render(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter initialEntries={['/login']}>

                    <Routes>
                        <Route path="/login" element={
                            <PublicRoute>
                                <h1>PublicComponent</h1>
                            </PublicRoute>
                        } />

                        <Route path="/marvel" element={ <h1>MarvelComponent</h1> } />
                    </Routes>

                </MemoryRouter>
            </AuthContext.Provider>
        )
        
        expect( screen.getByText('MarvelComponent') ).toBeTruthy();
    })
})