import { render, screen } from "@testing-library/react"
import { AuthContext } from "../../src/auth"
import { PublicRoute } from "../../src/router/PublicRoute"


describe('Pruebas en el <PublicRoute />', () => {
  
  test('debe de mostrar el children si no esta autenticado', () => {

    const contextValue = {
      logged: false
    }

    render(
      <AuthContext.Provider value={ contextValue }>
        <PublicRoute>
          <h1>Ruta publica</h1>
        </PublicRoute>
      </AuthContext.Provider>
    );

    expect( screen.getByText('Ruta publica') ).toBeTruthy();

  });

  test('debe de navegar si esta autenticado', () => {


    const contextValue = {
      logged: false,
      user: {
        name: 'Ale',
        id: 'abc124'
      }
    }

    render(
      <AuthContext.Provider value={ contextValue }>
        
          <PublicRoute>
            <h1>Ruta publica</h1>
          </PublicRoute>
        
      </AuthContext.Provider>
    );
  })

});