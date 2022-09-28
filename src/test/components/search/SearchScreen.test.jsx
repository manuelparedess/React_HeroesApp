import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { SearchScreen } from '../../../components/search/SearchScreen'


const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockNavigate, /* para solo hacer la simulacion del useNavigate */
}));



describe('Pruebas en SearchScreen', () => {  
    
    test('debe de mostrarse correctamente con los valores por defecto', () => {  

        const {container} = render(
            <MemoryRouter initialEntries={ ['/search'] }>
                <SearchScreen />
            </MemoryRouter>
        );

        expect(container).toMatchSnapshot();
        expect(screen.getByText('Look for a hero')).toBeTruthy();

    })

    test('debe de mostrar a Batman y el input con el valor del queryString', () => {  

        render(
            <MemoryRouter initialEntries={ ['/search?q=batman'] }>
                <SearchScreen />
            </MemoryRouter>
        );

        const input = screen.getByRole('textbox')

        expect( input.value ).toBe('batman');

    })

    test('debe de mostrar un error si no se encuentra el heroe', () => {  

        render(
            <MemoryRouter initialEntries={ ['/search?q=batman123'] }>
                <SearchScreen />
            </MemoryRouter>
        );

        expect( screen.getByText('No hero with:') ).toBeTruthy();

    })

    test('debe de llamar el navigate a la nueva pantalla', () => {  

        render(
            <MemoryRouter initialEntries={ ['/search'] }>
                <SearchScreen />
            </MemoryRouter>
        );
        
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input( input, {
            target: {
                name: 'searchText',
                value: 'batman'
            }
        });

        fireEvent.submit( form, { preventDefault: () => {} } );

        expect(mockNavigate).toHaveBeenCalledWith('?q=batman');
    })

})