import './App.css';
import Homepage from './screens/Homepage'
import Layout from './layouts/Layout';
import Login from './screens/Login';
import Register from './screens/Register';
import MainContainer from './containers/MainContainer';
import { Switch, Route, useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';
import {
	loginUser,
	registerUser,
	verifyUser,
	removeToken,
} from './services/auth';

function App() {
	const [currentUser, setCurrentUser] = useState(null);
	const history = useHistory();

	useEffect(() => {
		const handleVerify = async () => {
			const userData = await verifyUser();
			setCurrentUser(userData);
		};
		handleVerify();
	}, []);

	const handleLogin = async (formData) => {
		const userData = await loginUser(formData);
		setCurrentUser(userData);
		history.push('/artists');
	};

	const handleRegister = async (formData) => {
		const userData = await registerUser(formData);
		setCurrentUser(userData);
		history.push('/artists');
	};

	const handleLogout = () => {
		setCurrentUser(null);
		localStorage.removeItem('authToken');
		removeToken();
	};

	return (
    <div className='App'>
			<Layout currentUser={currentUser} handleLogout={handleLogout}>
        <Switch>
					<Route path='/login'>
						<Login handleLogin={handleLogin} />
					</Route>
					<Route path='/register'>
						<Register handleRegister={handleRegister} />
					</Route>
					<Route path='/artists'>
						<MainContainer />
					</Route>
          <Route path='/'>
            <Homepage />
          </Route>
				</Switch>
			</Layout>
		</div>
	);
}

export default App;