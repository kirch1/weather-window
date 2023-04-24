import "./Header.css";
import logo from "../../assets/ww_logo.svg";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  const getNavButton = () => {
    if (location.pathname === "/activities") {
      return (
        <Link to="/">
          <button>Home</button>
        </Link>
      );
    } else if (location.pathname === "/error") {
      return <div></div>;
    } else if (location.pathname === "/") {
      return (
        <Link to="/activities" id="activities-button">
          <button>Activities</button>
        </Link>
      );
    }
  };

  return (
    <header>
      <Link to="/">
        <img src={logo} alt="App logo" className="header-logo" />
        <p className="logo-text">Weather Window</p>
      </Link>
      {getNavButton()}
    </header>
  );
};

export default Header;
