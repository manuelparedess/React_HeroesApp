
import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom"
import { AuthContext } from '../../auth/authContext';
import { PrivateRoute } from '../../routers/PrivateRoute';


describe('Pruebas en PrivateRoute', () => {  

    Storage.prototype.setItem = jest.fn();

    test('debe de mostrar el componente si esta autenticado', () => {  

        const contextValue = {
            user:{
                logged: true,
                name: 'Manuel'
            }
        }

        render(
             <AuthContext.Provider value={contextValue}>
                <MemoryRouter initialEntries={['/search?q=batman']}>
                    <PrivateRoute>
                        <h1>PrivateComponent</h1>
                    </PrivateRoute>
                </MemoryRouter>
            </AuthContext.Provider>
        )

        expect( screen.getByText('PrivateComponent') ).toBeTruthy();
        expect( localStorage.setItem ).toHaveBeenCalledWith('lastPath','/search?q=batman')
    })


    test('debe de bloquear el componente si NO esta autenticado', () => {  

        const contextValue = {
            user:{
                logged: false,
            }
        }

        render(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter initialEntries={['/marvel']}>

                    <Routes>
                        <Route path="/login" element={ <h1>Logout</h1> } />

                        <Route path="/marvel" element={
                            <PrivateRoute>
                                <h1>PrivateComponent</h1>
                            </PrivateRoute>
                        } />
                    </Routes>

                </MemoryRouter>
            </AuthContext.Provider>
        )

        expect( screen.getByText('Logout') ).toBeTruthy();
    })
})