import { Navbar } from "../../../components/ui/Navbar"
import { types } from "../../../types/types"
import { AuthContext } from "../../../auth/authContext"
import { MemoryRouter } from "react-router-dom"
import { render, screen, fireEvent } from "@testing-library/react"


const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
   ...jest.requireActual('react-router-dom'),
   useNavigate: () => mockNavigate, /* para solo hacer la simulacion del useNavigate */
}));


describe('Pruebas en NavBar', () => {

    const contextValue = {
        user: {
            name: "Pedro",
            logged: true
        },
        dispatch: jest.fn()
    };

    beforeEach( () => jest.clearAllMocks() );
    
    test('debe mostrarse correctamente', () => {
        
        render(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter initialEntries={['/']}>
                    <Navbar />
                </MemoryRouter>
            </AuthContext.Provider>
        );

        expect( screen.getByText('Pedro') ).toBeTruthy();

    })

    test('debe de realizar el dispatch y la navegacion', () => {

        render(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter initialEntries={['/']}>
                    <Navbar />
                </MemoryRouter>
            </AuthContext.Provider>
        );
        
        const button = screen.getByRole('button');
        fireEvent.click( button );

        expect( contextValue.dispatch ).toHaveBeenCalledWith({'type': types.logout});
        expect(mockNavigate).toHaveBeenCalledWith('/login', {replace: true});
    })

})