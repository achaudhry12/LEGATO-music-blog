import { Link } from 'react-router-dom';
import "../assets/css/Layout.css"

export default function Layout(props) {
	const { currentUser, handleLogout, children } = props;
	return (
		<div className="layout-container">
      <div className="title-container">
        <div className="title_div">
        <Link class='title_name' to='/artists'>
            <p class='title'>Legato</p>
            <p class='subtitle'>music blog</p>
        </Link>
        </div>
        <div className='login-buttons'>
				{currentUser ? (
          <>
						<p>HI, {(currentUser.username).toUpperCase()}</p>
						<button onClick={handleLogout}>LOGOUT</button>
					</>
				) : (
          <Link to='/login'><button>LOGIN</button></Link>
          )}
          </div>
			</div>
			{children}
		</div>
	);
}