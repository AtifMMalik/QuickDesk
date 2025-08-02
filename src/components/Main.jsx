import { Route, Routes } from "react-router-dom";
import Profile from "./protected/Profile";
import Login from "./Login";
import Signup from "./Signup";
import ProtectedRoutes from "../utils/ProtectedRoutes";
import Page404 from "./Page404";
import Home from "./Home";

const Main = () => {
  return (
    <main>
        <Routes>
            <Route path="/login" element={<Login/>}/>
            <Route path="/signup" element={<Signup/>}/>
        
            {/* PROTECTED ROUTES */}
            <Route element={<ProtectedRoutes/>}>
                <Route path="/" element={<Home/>}/>
                <Route path="/home" element={<Home/>}/>
                <Route path="/profile" element={<Profile/>}/>
            </Route>
        
            {/* 404 page */}
            <Route path="*" element={<Page404 />} />
        </Routes>
    </main>
  )
}

export default Main