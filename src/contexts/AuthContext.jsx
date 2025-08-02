import axios from "axios";
import { createContext, useState, useEffect } from "react";
import {URL__AUTH_CONFIRM,URL__LOGIN,URL__LOGOUT} from "../utils/URLs"

// CREATE CONTEXT
const AuthContext = createContext(null);

// CREATE PROVIDER
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [role, setRole] = useState(null);
    const [token, setToken] = useState(null);
    const [loading, setLoading] = useState(true);

    // Check user login status.
    useEffect(() => {
        // local storage data
        const storedUser = JSON.parse(localStorage.getItem("user"));
        const storedToken = JSON.parse(localStorage.getItem("jwt"));
        const storedUserRole = JSON.parse(localStorage.getItem("role"));

        if (storedUser && storedToken && storedUserRole) {
            axios.post(URL__AUTH_CONFIRM, null, {
                headers: {
                    Authorization: `Bearer ${storedToken}`,
                },
            }).then((response) => {
                if (response.data.valid) {
                    setUser(storedUser);
                    setToken(storedToken);
                    setRole(storedUserRole);
                    setLoading(false);
                } else {
                    handleLogout();
                }
            }).catch(() => handleLogout());
        }else{
            handleLogout();
        }
    }, []);

    const handleLogout = () => {
        setUser(null);
        setToken(null);
        setRole(null);
        localStorage.removeItem("jwt");
        localStorage.removeItem("user");
        localStorage.removeItem("role");
        setLoading(false);
    };

    const login = (formData) => {
        axios.post(URL__LOGIN, formData).then((response) => {
            const data = response.data;
            if (data?.isLoggedIn) {
                setUser(data.user);
                setToken(data.jwt);
                setRole(data.role);
                setLoading(false);
                localStorage.setItem("jwt", JSON.stringify(data.jwt));
                localStorage.setItem("user", JSON.stringify(data.user));
                localStorage.setItem("role", JSON.stringify(data.role));
            } else {
                handleLogout();
            }
        }).catch(() => {
            alert("Login failed!");
            handleLogout();
        });
    };

    const logout = () => {
        axios.post(URL__LOGOUT, null, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }).then((response) => {
            if (response.data === "logged out successfully") {
                handleLogout();
            } else {
                alert("Logout failed!");
                setLoading(false);
            }
        }).catch(() => {
            alert("Logout failed!")
            setLoading(false);
        });
    };

    return (
        <AuthContext.Provider value={{ user, token , role , login, logout, loading }}>
            {children}
        </AuthContext.Provider>
    );
};

// Optional custom hook
// export const useAuth = () => useContext(AuthContext);

export default AuthContext;