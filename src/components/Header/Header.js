import './Header.css';
import logo from '../../assets/ww_logo.svg';

const Header = ({time}) => {
  return(
    <header>
      <img src={logo} alt='App logo' className='header-logo'/>
      <button>Acitivties</button>
    </header>
  )
}

export default Header;
