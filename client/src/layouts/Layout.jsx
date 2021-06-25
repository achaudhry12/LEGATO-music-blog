import { Link } from 'react-router-dom';

export default function Layout(props) {
	const { currentUser, handleLogout, children } = props;
	return (
		<div>
			<header>
        <h1>LEGATO</h1>
        <h2>MUSIC BLOG</h2>
				{currentUser ? (
					<>
						<p>{currentUser.username}</p>
						<button onClick={handleLogout}>LOGOUT</button>
					</>
				) : (
					<Link to='/login'><button>LOGIN</button></Link>
        )}
			</header>
			{children}
		</div>
	);
}