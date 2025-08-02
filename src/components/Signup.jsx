import { useState } from "react";
import axios from "axios";
import { useContext } from "react";
import AuthContext from "../contexts/AuthContext";
import { useNavigate, Link } from "react-router-dom";
import { URL__SIGNUP } from "../utils/URLs";
import "./style.css"
import { HiOutlineViewGridAdd } from "react-icons/hi";
import LogoName from "./LogoName";


const Signup = () => {
  const { login, loading } = useContext(AuthContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    name:"",
    password: "",
    password2: ""
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(URL__SIGNUP, formData);
      if (res.data.success) {
        await login({
          email: formData.email,
          password: formData.password
        });
        navigate("/");
      } else {
        alert("Signup failed");
      }
    } catch (err) {
      alert("Signup error",err);
    }
  };

  return (
    <div className="formScreen">

      <LogoName/>
  
      <div className="form">
        {loading ? <p>Loading...</p> : (
          <form onSubmit={handleSubmit}>
            <h2>Signup.</h2>
            <input type="text" name="username" placeholder="Username" required onChange={handleChange}/>
            <input type="text" name="name" placeholder="Full Name" required onChange={handleChange}/>
            <input type="email" name="email" placeholder="Email" required onChange={handleChange}/>
            <input type="password" name="password" placeholder="Password" required onChange={handleChange}/>
            <input type="password" name="password2" placeholder="Confirm Password" required onChange={handleChange}/>
            <h3>Register As.</h3>
            {/* <div className="radioIP">
              <input type="radio" name="role" value={"admin"} id="si_roleAdmin" />
              <label htmlFor="si_roleAdmin">Admin</label>
            </div> */}
            <div className="radioIP">
              <input type="radio" name="role" value={"admin"} id="si_roleSupportAgent" />
              <label htmlFor="si_roleSupportAgent">Support Agent</label>
            </div>
            <div className="radioIP">
              <input type="radio" name="role" value={"customer"} id="si_roleCustomer"/>
              <label htmlFor="si_roleCustomer">Customer</label>
            </div>


            <button type="submit" className="button_default">Signup</button>
          </form>
        )}
        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
