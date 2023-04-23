import HourForecast from './HourForecast/HourForecast';
import './DailyForecast.css';

const DailyForecast = ({forecast}) => {
  const formatted = new Date(forecast.date)
  const hours = forecast.hour.map(hour => <HourForecast key={hour.time_epoch} hour={hour}/>);
  return(    
    <div className='daily-forecast-parent'>
      <p className='date-text'>{forecast.date}</p>
      <div className='daily-forecast-flex'>
        {hours}
      </div>
    </div> 
  )
}

export default DailyForecast;
