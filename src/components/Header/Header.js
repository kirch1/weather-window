import './Header.css';
import logo from '../../assets/ww_logo.svg';
import { Link } from 'react-router-dom';

const Header = ({time}) => {
  return(
    <header>
      <img src={logo} alt='App logo' className='header-logo'/>
      <Link to='/activities'>
        <button>Activities</button>
      </Link>
    </header>
  )
}

export default Header;
