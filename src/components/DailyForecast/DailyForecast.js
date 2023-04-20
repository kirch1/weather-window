import HourForecast from './HourForecast/HourForecast';
import './DailyForecast.css';

const DailyForecast = ({forecast}) => {
  const hours = forecast.hour.map(hour => <HourForecast key={hour.time_epoch} hour={hour}/>);
  return(    
    <div className='daily-forecast-parent'>
      {/* <h3>{forecast.date}</h3> */}
      {hours}
    </div>
  )
}

export default DailyForecast;
