import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import './Location.css';

export const Location = ({location, setLocation}) => {

  const history = useHistory();
  const locationSelected = () => {
    setLocation(location.zip);
    history.push('/');
  }

  return(
    <div className='card location-card'>
    <p className='card-title'>{location.name}</p>
      <button onClick={locationSelected} className='set-location-button'>Set Location</button>
    </div>
  )
}

Location.propTypes = {
  location: PropTypes.object,
  setLocation: PropTypes.func
}
