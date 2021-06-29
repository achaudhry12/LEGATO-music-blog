import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import "../assets/css/Form.css";

export default function Login(props) {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const { username, password } = formData;
  const { handleLogin } = props;
  const { id } = useParams();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <>
      <br />
      <div className="container">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleLogin(id, formData);
          }}
        >
          <h2>LOGIN</h2>
          <div className="text-field">
            <label>
              <p>Username</p>
              <input
                type="text"
                name="username"
                value={username}
                onChange={handleChange}
              />
            </label>
          </div>
          <br />
          <div className="text-field">
            <label>
              <p>Password</p>
              <input
                type="password"
                name="password"
                value={password}
                onChange={handleChange}
              />
            </label>
          </div>
          <br />
          <button className="submit-button">SUBMIT</button>
          <br />
          Don't have an account?{" "}
          <Link to="/register">
            <button className="register-button">REGISTER</button>
          </Link>
        </form>
      </div>
      <br />
      <br />
      <br />
    </>
  );
}
