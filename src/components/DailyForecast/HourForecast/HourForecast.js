import './HourForecast.css';
import wind from '../../../assets/icons/wind.svg';
import rain from '../../../assets/icons/rain.svg';
import snowflake from '../../../assets/icons/snowflake.svg';
import arrow from '../../../assets/icons/arrow.svg';

const HourForecast = ({hour}) => {
  const time = new Date(hour.time).toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
  return(
    <div className='hour-forecast-parent'>
      <div className='hour-forecast-row'>
        <p className='hour-data'>{time}</p>
        <img className='hour-icon' src={hour.condition.icon} alt='Hour icon'/>
      </div>
      <div className='hour-forecast-row'>
        <p className='hour-data'>{`${Math.round(hour.temp_f)}\u00B0`}</p>
        <div className='hour-forecast-mini'>
          <img className='hour-icon-small' src={rain} alt='Hour icon small'/>
          <p className='hour-data'>{`${Math.round(hour.chance_of_rain)}%`}</p>
        </div>
        <div className='hour-forecast-mini'>
          <img className='hour-icon-small' src={snowflake} alt='Hour icon small'/>
          <p className='hour-data'>{`${Math.round(hour.chance_of_snow)}%`}</p>
        </div>
      </div>
      <div className='hour-forecast-row'>
        <div className='hour-forecast-mini'>
          <img className='hour-icon-small' src={wind} alt='Hour icon small'/>
          <p className='hour-data'>{`${Math.round(hour.wind_mph)} mph`}</p>
          <img className='hour-icon-small arrow' src={arrow} alt='Arrow icon' style={{transform:`rotate(${hour.wind_degree}deg)`}}/>
        </div>
      </div>
    </div>
  )
}

export default HourForecast;
