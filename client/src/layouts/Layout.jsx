import { Link } from 'react-router-dom';
import "../assets/css/Layout.css"

export default function Layout(props) {
	const { currentUser, handleLogout, children } = props;
	return (
		<div className="layout-container">
      <div className="title-container">
        <Link to='/artists'>
          <h1>LEGATO</h1>
        </Link>
        <h3>MUSIC BLOG</h3>
				{currentUser ? (
					<>
						<p>HI, {(currentUser.username).toUpperCase()}</p>
						<button onClick={handleLogout}>LOGOUT</button>
					</>
				) : (
					<Link to='/login'><button>LOGIN</button></Link>
        )}
			</div>
			{children}
		</div>
	);
}