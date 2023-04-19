import './Header.css';
import logo from '../../assets/ww_logo.svg';

const Header = () => {
  return(
    <header>
      <img src={logo} alt='App logo' className='header-logo'/>
      <p className='local-time'>10:03 AM</p>
    </header>
  )
}

export default Header;
