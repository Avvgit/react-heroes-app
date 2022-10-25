import { authReducer, types  } from "../../../src/auth";

// Probando el Reducer que basado en el estado inicial y la accion que recibe el authReducer emita el estado que yo estaria utilizando en mi app. De esta manera no tendria que simular nada.

describe('Pruebas en el authReducer', () => { 

    test('debe de (logout) borrar el name del usuario y logged en false', () => {

      const state = authReducer({ logged: false}, {});
      expect( state ).toEqual({ logged: false});

    })

    test('debe de retornar el estado por defecto', () => {
        
      const action = {
        type: types.login,
        payload: {
          name: 'Juan',
          id: '123'
        }
      }

      const state = authReducer({ logged: false}, action );
      expect(state).toEqual({
        logged: true,
        user: action.payload
      })

    })

    test('debe de (login) llamar el login autenticar y establecer el user', () => {

        const state = {
          logged: true,
          user: { id: '123', name: 'Pepe'}
        }

        const action = {
          type: types.logout
        }

        const newState = authReducer( state, action );

        expect( newState ).toEqual({ logged: false })

    })
  
});