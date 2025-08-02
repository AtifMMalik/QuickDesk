import { useState } from "react";
import axios from "axios";
import { useContext } from "react";
import AuthContext from "../contexts/AuthContext";
import { useNavigate, Link } from "react-router-dom";
import { URL__SIGNUP } from "../utils/URLs";

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
    <div>
      <h2>Signup</h2>
      {loading ? <p>Loading...</p> : (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            placeholder="Username"
            required
            onChange={handleChange}
          />
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            required
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
            onChange={handleChange}
          />
          <input
            type="password"
            name="password2"
            placeholder="Confirm Password"
            required
            onChange={handleChange}
          />
          <button type="submit">Signup</button>
        </form>
      )}
      <p>
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </div>
  );
};

export default Signup;
