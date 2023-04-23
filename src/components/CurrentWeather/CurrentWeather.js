import PropTypes from 'prop-types';
import stateDict from '../../stateDict';
import sunny from '../../assets/icons/sunny.svg';
import './CurrentWeather.css';

const CurrentWeather = ({location, current}) => {
  
  return(
    <section className='current-weather-parent'>
      <div>
        <h1 className='current-weather-location'>{`${location.name}, ${stateDict[location.region]}`}</h1>
        <div className='current-weather-data'>
          {`${current.condition.text} - ${Math.round(current.temp_f)}\u00B0 - ${Math.round(current.wind_mph)}mph`}
        </div>
      </div>
      <img src={sunny} alt={'current condition icon'} className='current-weather-icon'/>
    </section>
  )
}

export default CurrentWeather;

CurrentWeather.propTypes = {
  location: PropTypes.object.isRequired,
  current: PropTypes.object.isRequired
}
