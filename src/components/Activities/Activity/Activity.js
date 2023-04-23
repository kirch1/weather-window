import { Link } from 'react-router-dom';
import './Activity.css';

export const Activity = ({activity}) => {
  return(
    <div className='activity-parent'>
      <div className='activity-header'>
        <p className='activity-name'>{activity.name}</p>
        <button>Set</button>
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
