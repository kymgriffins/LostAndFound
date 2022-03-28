import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link,
} from "react-router-dom";
import PrivateRoute from "./Utils/PrivateRoute";
import SignIn from "./Pages/Login";
import Home from "./Pages/Home";
import Header from "./components/Header";
import SignUp from "./Pages/SignUp";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              
                <Home />
              
            }
          />
          <Route element={<SignUp />} path="/signup" />
          <Route element={<SignIn />} path="/login" />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
