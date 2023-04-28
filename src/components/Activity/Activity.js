import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import './Activity.css';

export const Activity = ({activity, conditions, setConditions}) => {
  const { name, temp, wind, rain, snow, humidity } = activity;
  const history = useHistory();
  const activitySelected = () => {
    setConditions({
      temp: { ...conditions.temp, values: temp.values, enabled: temp.enabled},
      wind: { ...conditions.wind, values: wind.values, enabled: wind.enabled},
      rain: { ...conditions.rain, values: rain.values, enabled: rain.enabled},
      snow: { ...conditions.snow, values: snow.values, enabled: snow.enabled},
      humidity: { ...conditions.humidity, values: humidity.values, enabled: humidity.enabled}
    })
    history.push('/');
  }

  return(
    <div className='card activity-card'>
    <p className='card-title'>{name}</p>
      <div className='activity-conditions'>
        <div className='single-condition'>
          <p className='condition-label'>Temp</p>
          <p className='condition-value'>{temp.values[0]}°F  - {temp.values[1]} °F</p>
        </div>
        <div className='single-condition'>
          <p className='condition-label'>Wind</p>
          <p className='condition-value'>{wind.values[0]} mph - {wind.values[1]} mph</p>
        </div>
        <div className='single-condition'>
          <p className='condition-label'>Rain</p>
          <p className='condition-value'>{rain.values[0]}% - {rain.values[1]}%</p>
        </div>
        <div className='single-condition'>
          <p className='condition-label'>Snow</p>
          <p className='condition-value'>{snow.values[0]}% - {snow.values[1]}%</p>
        </div>
        <div className='single-condition'>
          <p className='condition-label'>Humidity</p>
          { humidity.enabled ?
            <p className='condition-value'>{humidity.values[0]}% - {humidity.values[1]}%</p> : 
            <p className='condition-value'>{'N/A'}</p> }
        </div>
        <button onClick={activitySelected} className='set-button'>Set Activity</button>
      </div>
    </div>
  )
}

Activity.propTypes = {
  activity: PropTypes.object.isRequired,
  setConditions: PropTypes.func
}
