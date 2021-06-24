import { Link } from 'react-router-dom';

export default function Layout(props) {
	const { currentUser, handleLogout, children } = props;
	return (
		<div>
			<header>
				<h1>LEGATO</h1>
				{currentUser ? (
					<>
						<p>{currentUser.username}</p>
						<button onClick={handleLogout}>Logout</button>
					</>
				) : (
					<Link to='/login'><button>Login</button></Link>
				)}
			</header>
			{children}
		</div>
	);
}