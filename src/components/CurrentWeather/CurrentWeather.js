import PropTypes from 'prop-types';
import stateDict from '../../stateDict';
import './CurrentWeather.css';

const CurrentWeather = ({location, current}) => {
  
  return(
    <div className='card current-weather-card'>
      <p className='card-title'>Current Weather</p>
      <div className='current-weather-parent'>
        <div className='current-weather-left'>
          <h1 className='current-weather-location'>{`${location.name}, ${stateDict[location.region]}`}</h1>
          <div className='current-weather-data'>
            {/* {`${current.condition.text} - ${Math.round(current.temp_f)}\u00B0 - ${Math.round(current.wind_mph)} mph`} */}
            {`${current.condition.text}  ${Math.round(current.temp_f)}\u00B0`}
          </div>
        </div>
        <img src={current.condition.icon} alt={'current condition icon'} className='current-weather-icon'/>
      </div>
    </div>
  )
}

export default CurrentWeather;

CurrentWeather.propTypes = {
  location: PropTypes.object.isRequired,
  current: PropTypes.object.isRequired
}
