import { Route, Routes } from "react-router-dom";

import { LoginPage } from "../auth";
import { HeoresRoutes } from "../heroes";

import { Navbar } from "../ui"
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";


export const AppRouter = () => {

  
  return (
    <>
      <Navbar />

      <Routes>

        <Route path='/login' element={
          <PublicRoute>
            <LoginPage /> 
          </PublicRoute>
        }

        />

        <Route path="/*" element={
          <PrivateRoute>
            <HeoresRoutes />
          </PrivateRoute>
        } />
        
         {/* <Route path="login" element={<LoginPage />}  /> */}

        {/* <Route path="/*" element={<HeoresRoutes />} /> */}



      </Routes>
    </>
  )
}
