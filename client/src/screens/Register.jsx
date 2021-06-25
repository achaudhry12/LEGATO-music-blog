import {useState} from 'react'

export default function Register(props) {
  const [formData, setFormData] = useState({
		username: '',
    email: '',
		password: '',
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
  <form
    onSubmit={(e) => {
      e.preventDefault();
      handleRegister(formData);
    }}
  >
  <div className="register-container">
    <h3>REGISTER</h3>
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
    <div className="email-feild">
			<label>
				EMAIL:
				<input
					type='text'
					name='email'
					value={email}
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
		</form>
  )
}
