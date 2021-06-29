import { Link } from 'react-router-dom';
import "../assets/css/Layout.css"

export default function Layout(props) {
	const { currentUser, handleLogout, children } = props;
	return (
		<div className="layout-contianer">
			<header>
        <h1>LEGATO</h1>
        <h3>MUSIC BLOG</h3>
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