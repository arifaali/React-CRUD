import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/css/navbar.css";
import { Link } from "react-router-dom";
//import { useContext } from "react";
//import UserContext from "../components/staticData/User";
function Navbar(props) {
  //const loggeduser = useContext(UserContext);
  const logOut = () => localStorage.removeItem("loggedUser");
  return (
    <nav className="navbar navbar-expand-lg navbar-light fixed-top mask-custom shadow-0">
      <div className="container">
        <Link className="navbar-brand" to="/dashboard">
          <span>Welcome</span>
          <span>&nbsp;{props.user.username}</span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-mdb-toggle="collapse"
          data-mdb-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fas fa-bars"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link to={"/dashboard"} className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/EventsList"} className="nav-link">
                Events
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav d-flex flex-row">
            <li className="nav-item me-3 me-lg-0">
              <a className="nav-link" href="/" onClick={logOut}>
                Logout
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
