import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import './Activity.css';

export const Activity = ({activity, conditions, setConditions}) => {
  const { name, temp, wind, rain, snow, humidity } = activity;
  const history = useHistory();
  const activitySelected = () => {
    setConditions({
      temp: { ...conditions.temp, values: temp, enabled: temp ? true : false},
      wind: { ...conditions.wind, values: wind, enabled: wind ? true : false},
      rain: { ...conditions.rain, values: rain, enabled: rain ? true : false},
      snow: { ...conditions.snow, values: snow, enabled: snow ? true : false},
      humidity: { ...conditions.humidity, values: humidity, enabled: humidity ? true : false}
    })
    history.push('/');
  }

  return(
    <div className='card activity-card'>
    <p className='card-title'>{name}</p>
      <div className='activity-conditions'>
        <div className='single-condition'>
          <p className='condition-label'>Temp</p>
          <p className='condition-value'>{temp[0]} &#8457; - {temp[1]} &#8457;</p>
        </div>
        <div className='single-condition'>
          <p className='condition-label'>Wind</p>
          <p className='condition-value'>{wind[0]} mph - {wind[1]} mph</p>
        </div>
        <div className='single-condition'>
          <p className='condition-label'>Rain</p>
          <p className='condition-value'>{rain[0]}% - {rain[1]}%</p>
        </div>
        <div className='single-condition'>
          <p className='condition-label'>Snow</p>
          <p className='condition-value'>{snow[0]}% - {snow[1]}%</p>
        </div>
        <div className='single-condition'>
          <p className='condition-label'>Humidity</p>
          <p className='condition-value'>{humidity ? `${humidity[0]}% - ${humidity[1]}%` : 'N/A'}</p>
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
