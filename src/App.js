import {
  BrowserRouter as Router,
  Route,
  Routes,
  //Link,
} from "react-router-dom";
import { useState } from "react";
import PrivateRoute from "./Utils/PrivateRoute";
import SignIn from "./Pages/Login";
import Home from "./Pages/Home";
import Header from "./components/Header";
import SignUp from "./Pages/SignUp";
import SignUpBootstrap from "./Pages/SignUpBootStrap";
import UserAuthContextProvider from './context/UserAuthContext';
// import {useState} from 'react';
function App() {
  const [isLogged, setIsLogged] = useState(false);
  return (
    <div className="App">
      <UserAuthContextProvider>
      <Router>
        <Header />
        <Routes>
          {/* <Route path="/"element={<Home />} exact/> */}
          <Route
           path="/"
            element={
              
              <PrivateRoute isLogged={isLogged}>
                <Home />
              </PrivateRoute>
            }
          />
            <Route element={<SignUp />} path="/signup" />
            <Route element={<SignIn />} path="/login" />
         {<Route element={<SignUpBootstrap/>}  path='/signupbootstrap'/> }
        </Routes>
      </Router>
      </UserAuthContextProvider>
    </div>
  );
}

export default App;
