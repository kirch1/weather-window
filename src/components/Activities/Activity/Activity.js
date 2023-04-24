import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import './Activity.css';

export const Activity = ({activity, conditions}) => {
  const { setTemp, setWind, setRain, setSnow, setHumidity, findWindows } = conditions;

  const history = useHistory();
  const setConditions = () => {
    setTemp(activity.temp);
    setWind(activity.wind);
    setRain(activity.rain);
    setSnow(activity.snow);
    setHumidity(activity.humidity);
    findWindows();
    history.push('/');
  }

  return(
    <div className='activity-parent'>
      <div className='activity-header'>
        <p className='activity-name'>{activity.name}</p>
        <button onClick={setConditions} className='set-button'>Set</button>
      </div>
      <div className='activity-conditions'>
        <div className='single-condition'>
          <p className='condition-label'>Temp</p>
          <p className='condition-value'>{activity.temp[0]} &#8457; - {activity.temp[1]} &#8457;</p>
        </div>
        <div className='single-condition'>
          <p className='condition-label'>Wind</p>
          <p className='condition-value'>{activity.wind[0]} mph - {activity.wind[1]} mph</p>
        </div>
        <div className='single-condition'>
          <p className='condition-label'>Rain</p>
          <p className='condition-value'>{activity.rain[0]}% - {activity.rain[1]}%</p>
        </div>
        <div className='single-condition'>
          <p className='condition-label'>Snow</p>
          <p className='condition-value'>{activity.snow[0]}% - {activity.snow[1]}%</p>
        </div>
        <div className='single-condition'>
          <p className='condition-label'>Humidity</p>
          <p className='condition-value'>{activity.humidity[0]}% - {activity.humidity[1]}%</p>
        </div>
      </div>
    </div>
  )
}

Activity.propTypes = {
  activity: PropTypes.object.isRequired,
  conditions: PropTypes.shape({
    temp: PropTypes.array.isRequired,
    wind: PropTypes.array.isRequired,
    rain: PropTypes.array.isRequired,
    snow: PropTypes.array.isRequired,
    humidity: PropTypes.array.isRequired,
    setTemp: PropTypes.func.isRequired,
    setWind: PropTypes.func.isRequired,
    setRain: PropTypes.func.isRequired,
    setSnow: PropTypes.func.isRequired,
    setHumidity: PropTypes.func.isRequired,
    findWindows: PropTypes.func.isRequired
  })
}
