import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Login(props) {
	const [formData, setFormData] = useState({
		username: '',
		password: '',
	});
	const { username, password } = formData;
	const { handleLogin } = props;

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevState) => ({
			...prevState,
			[name]: value,
		}));
	};

	return (
	<form
		onSubmit={(e) => {
			e.preventDefault();
			handleLogin(formData);
		}}
  >
  <div className="login-contianer">
    <h3>LOGIN</h3>
    <div className="username-feild">
      <label>
        USERNAME:
        <input
          type='text'
          name='username'
          value={username}
          onChange={handleChange}
          />
      </label>
    </div>
    <br />
    <div className="password-feild">
      <label>
        PASSWORD:
        <input
          type='password'
          name='password'
          value={password}
          onChange={handleChange}
        />
      </label>
    </div>
    <br />
    <button>SUBMIT</button>
  </div>
    <br />
    <p>OR</p>
    <br />
    <Link to='/register'><button>REGISTER</button></Link>
		</form>
	);
}