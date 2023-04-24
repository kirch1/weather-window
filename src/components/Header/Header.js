import "./Header.css";
import logo from "../../assets/ww_logo.svg";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  const getNavButton = () => {
    if (location.pathname === "/activities" || location.pathname === "/locations") {
      return <Link to="/"> <button>Home</button> </Link>
    }
    else if (location.pathname === "/error") {
      return <Link to="/"> <button>Home</button> </Link>
    } else if (location.pathname === "/") {
      return (
        <>
          <Link to="/activities" id="activities-button"> <button>Activities</button> </Link>
          <Link to="/locations" id="activities-button"> <button>Locations</button></Link>
        </>
      );
    }
  };

  return (
    <header>
      <Link to="/">
        <img src={logo} alt="App logo" className="header-logo" />
        <div>
          <p className="logo-text">Weather Window</p>
          <p className="promo">Find the perfect weather conditions.</p>
        </div>
      </Link>
      <div className="nav-buttons-parent">
        {getNavButton()}
      </div>
    </header>
  );
};

export default Header;
