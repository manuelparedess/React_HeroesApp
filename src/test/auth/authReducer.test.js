import { authReducer } from "../../auth/authReducer";
import { types } from "../../types/types";


describe('Pruebas en authReducer', () => {  

    test('debe de retornar el estado por defecto', () => {  

        const state = authReducer( {logged:false}, {} );

        expect(state).toEqual({logged:false});
        
    })

    test('debe de autenticar y colocar el "name" del usuario', () => {  

        const action = {
            type: types.login,
            payload: {
                name: 'Manuel'
            }
        };

        const state = authReducer( {logged:false}, action );

        expect(state).toEqual({
            name: 'Manuel',
            logged: true
        });
        
    })

    test('debe de borrar el name y logged en false', () => {  

        const action = {
            type: types.logout,
        };

        const state = authReducer( {
            name: 'Manuel',
            logged: true
        }, action );

        expect(state).toEqual({logged:false});
        
    })
})