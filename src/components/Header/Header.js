import './Header.css';
import logo from '../../assets/ww_logo.svg';

const Header = ({time}) => {
  const formatted = new Date(time).toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });

  return(
    <header>
      <img src={logo} alt='App logo' className='header-logo'/>
      <p className='local-time'>{formatted}</p>
    </header>
  )
}

export default Header;
