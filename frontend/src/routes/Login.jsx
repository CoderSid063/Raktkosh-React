import { useState } from "react";
import axios from "axios";
import "../styles/login.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [loginFormData, setLoginFormData] = useState({
    emailOrPhoneNumber: "",
    password: "",
  });

  const handleLoginInputChange = (e) => {
    const { name, value } = e.target;
    setLoginFormData({
      ...loginFormData,
      [name]: value,
    });
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/v1/users/login",
        loginFormData
      );
      console.log(response);

      if (response.statusText === "OK") {
        console.log("after login: ", response.data);
        // Reset form after submission
        setLoginFormData({
          emailOrPhoneNumber: "",
          password: "",
        });

        navigate("/");
      }
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };

  return (
    <div className="home">
      <div className="form_container">
        <form onSubmit={handleLoginSubmit}>
          <h2>Login</h2>
          <div className="input_box">
            <input
              type="text"
              name="email"
              value={loginFormData.emailOrPhone}
              onChange={handleLoginInputChange}
              placeholder="Enter Email or Phone No"
              required
            />
            <div className="line"></div>
          </div>
          <div className="input_box">
            <input
              type="password"
              name="password"
              value={loginFormData.password}
              onChange={handleLoginInputChange}
              placeholder="Enter Password"
              required
            />
            <div className="line"></div>
          </div>

          <div className="option_field">
            <Link to="/login/changePassword" className="forgot_pw">
              Forgot password
            </Link>
          </div>
          <button className="button" type="submit">
            Login Now
          </button>

          <div className="login_signup">
            Dont have an account?
            <Link to="/login/register" className="forgot_pw">
              Register
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
