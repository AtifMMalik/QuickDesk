import { Navigate, Outlet } from "react-router-dom";
import AuthContext from "../contexts/AuthContext";
import { useContext } from "react";

const ProtectedRoutes = () => {    
    const { user, token } = useContext(AuthContext);
    return user && token ? <Outlet /> : <Navigate to="/login" />;
}

export default ProtectedRoutes;