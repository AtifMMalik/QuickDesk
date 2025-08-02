import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../contexts/AuthContext";
import "./style.css";
import { HiOutlineViewGridAdd } from "react-icons/hi";

const Login = () => {
  const { login, loading } = useContext(AuthContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => setFormData(
    { ...formData, [e.target.name]: e.target.value }
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(formData);
    navigate("/");
  };

  return (
    <div id="loginScreen" className="formScreen">
      <div>
        <HiOutlineViewGridAdd />
        <h1>QuickDesk</h1>
      </div>

      <div className="form">
        {loading ? <p>Loading...</p> : (
          <form onSubmit={handleSubmit}>
            
            <input type="email" name="email" placeholder="Email" required onChange={handleChange}/>
            <input type="password" name="password" placeholder="Password" required onChange={handleChange}/>
            <h3>Login As.</h3>
            <div className="radioIP">
              <input type="radio" name="role" value={"admin"} id="si_roleAdmin" />
              <label htmlFor="si_roleAdmin">Admin</label>
            </div>
            <div className="radioIP">
              <input type="radio" name="role" value={"customer"} id="si_roleCustomer"/>
              <label htmlFor="si_roleCustomer">Customer</label>
            </div>

            <button type="submit" className="button_default">Login</button>
          </form>
        )}
        <p>
          Don't have an account? <Link to="/signup">Signup</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;