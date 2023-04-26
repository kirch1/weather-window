import HourForecast from "./HourForecast/HourForecast";
import PropTypes from 'prop-types';
import "./DailyForecast.css";

const DailyForecast = ({ forecast, windows }) => {
  const hours = forecast.hour
    .filter((hour) => windows.includes(hour.time_epoch))
    .map((hour) => <HourForecast key={hour.time_epoch} hour={hour} />);
  return (
    <div className='card daily-forecast-card'>
      <p className='card-title'>{forecast.date} Forecast - {hours.length} Weather Windows</p>
      {hours.length ? <div className="daily-forecast-flex">{hours}</div> : <p className="no-windows">No Weather Windows Found</p>}
    </div>
  );
};

export default DailyForecast;

DailyForecast.propTypes = {
  forecast: PropTypes.object.isRequired,
  windows: PropTypes.array.isRequired
}
