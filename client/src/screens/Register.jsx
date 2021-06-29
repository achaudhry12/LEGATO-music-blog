import { useState } from "react";

export default function Register(props) {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const { username, email, password } = formData;
  const { handleRegister } = props;

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
            handleRegister(formData);
          }}
        >
          <h2>REGISTER</h2>
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
              <p>Email</p>
              <input
                type="text"
                name="email"
                value={email}
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
        </form>
      </div>
      <br />
      <br />
      <br />
    </>
  );
}
