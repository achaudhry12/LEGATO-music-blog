import { Link } from "react-router-dom";
import "../assets/css/Homepage.css"

export default function Homepage() {
  return (
    <>
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="home-text">
        <p>SHARE YOUR DIFFERENT ARTISTS WITH YOUR FRIENDS!</p>
      </div>
      <br />
      <br />
      <br />
      <br />
      <div className="home-buttons">
        <br />
        <br />
        <Link to="/login">
          <button className="submit-button">LOGIN</button>
        </Link>
        <br />
        <br />
        <p>Don't have an account?</p>
        <Link to="/register">
          <button className="register-button">REGISTER</button>
        </Link>
        <br />
        <br />
      </div>
      <br />
      <br />
      <br />
    </>
  );
}
