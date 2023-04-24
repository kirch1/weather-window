import HourForecast from "./HourForecast/HourForecast";
import PropTypes from 'prop-types';
import "./DailyForecast.css";

const DailyForecast = ({ forecast, windows }) => {
  const formatted = new Date(forecast.date);
  const hours = forecast.hour
    .filter((hour) => windows.includes(hour.time_epoch))
    .map((hour) => <HourForecast key={hour.time_epoch} hour={hour} />);
  return (
    <div className='card daily-forecast-card'>
      <p className='card-title'>{forecast.date} Forecast</p>
      {hours.length ? <div className="daily-forecast-flex">{hours}</div> : <p>No Weather Windows Available</p>}
    </div>
  );
};

export default DailyForecast;

DailyForecast.propTypes = {
  forecast: PropTypes.object.isRequired,
  windows: PropTypes.array.isRequired
}
