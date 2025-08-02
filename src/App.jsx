import {  NavLink } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "./contexts/AuthContext";
import Main from "./components/protected/Main";
import Loader from "./components/Loader";
import "./App.css";

const App = () => {
  const authContext = useContext(AuthContext);
  return (
    <>
      {/* <header>
        <nav>
          <NavLink to="/profile">profile</NavLink>|
          <NavLink to="/login">login</NavLink>|
          <NavLink to="/signup">signup</NavLink>|
          <NavLink to="/Dashboard">Dashboard</NavLink>|
        </nav>
      </header> */}

      {authContext?.loading?
        <Loader/>
        :
        <Main/>
      }

      
    </>
  )
}

export default App