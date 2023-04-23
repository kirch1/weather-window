import HourForecast from "./HourForecast/HourForecast";
import "./DailyForecast.css";

const DailyForecast = ({ forecast, windows }) => {
  const formatted = new Date(forecast.date);
  const hours = forecast.hour
    .filter((hour) => windows.includes(hour.time_epoch))
    .map((hour) => <HourForecast key={hour.time_epoch} hour={hour} />);
  return (
    <div>
      <p className="date-text">{forecast.date}</p>
      {hours.length ? <div className="daily-forecast-flex">{hours}</div> : <p>No Weather Windows Available</p>}
    </div>
  );
};

export default DailyForecast;
