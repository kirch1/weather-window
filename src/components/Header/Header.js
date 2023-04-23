import './Header.css';
import logo from '../../assets/ww_logo.svg';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  return(
    <header>
      <img src={logo} alt='App logo' className='header-logo'/>
      {
        location.pathname === '/activities' ? 
        <Link to='/'>
          <button>Home</button>
        </Link> : 
        <Link to='/activities' id='activities-button'>
          <button>Activities</button>
        </Link>
      }
    </header>
  )
}

export default Header;
