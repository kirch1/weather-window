import Header from "./components/Header/Header";
import CurrentWeather from "./components/CurrentWeather/CurrentWeather";
import getWeather from "./api";
import ConditionsSelector from "./components/ConditionsSelector/ConditionsSelector";
import DailyForecast from "./components/DailyForecast/DailyForecast";
import { useEffect, useState } from "react";
import "./App.css";
import { Redirect, Route, Switch } from "react-router-dom";
import cleanWeatherData from "./utilities";
import activities from "./activitiesData";
import { Activity } from "./components/Activity/Activity";
import locations from "./locationsData";
import { Location } from "./components/Location/Location";

function App() {
  const [location, setLocation] = useState('80227');
  const [weather, setWeather] = useState();
  const [windows, setWindows] = useState([]);
  const [temp, setTemp] = useState([-20, 120]);
  const [wind, setWind] = useState([0, 100]);
  const [rain, setRain] = useState([0, 100]);
  const [snow, setSnow] = useState([0, 100]);
  const [humidity, setHumidity] = useState([0, 100]);
  const [errorMsg, setError] = useState('');

  const getData = async () => {
    const rawData = await getWeather(location, 3, setError);
    if(rawData) {
      const cleanData = cleanWeatherData(rawData);
      setWeather(cleanData);
    }
  };

  const findWindows = () => {
    const checkRange = (x, min, max) => x >= min && x <= max;

    if(weather) {
      const windows = weather.forecast.forecastday.reduce((acc, day) => {
        day.hour.forEach((hour) => {
          if (
            checkRange(hour.temp_f, temp[0], temp[1]) &&
            checkRange(hour.wind_mph, wind[0], wind[1]) &&
            checkRange(hour.chance_of_rain, rain[0], rain[1]) &&
            checkRange(hour.chance_of_snow, snow[0], snow[1]) &&
            checkRange(hour.humidity, humidity[0], humidity[1])
          ) {
            acc.push(hour.time_epoch);
          }
        });
        return acc;
      }, []);
  
      setWindows(windows);
    }
  };

  const conditionProps = { 
    temp, setTemp, 
    wind, setWind, 
    rain, setRain, 
    snow, setSnow, 
    humidity, setHumidity,
    findWindows
  }

  const getHomePage = () => {
    const forecastDays = weather.forecast.forecastday.map(forecast => {
      return <DailyForecast forecast={forecast} key={forecast.date_epoch} windows={windows}/>
    });
    return(
      <>
        <div className="main-upper">
          <CurrentWeather location={weather.location} current={weather.current} />
          <ConditionsSelector conditions={conditionProps} />
        </div>
        {forecastDays}
      </>
    )
  }

  const getActivities = () => {
    return activities.map(activity => (
      <Activity activity={activity} key={activity.name} conditions={conditionProps}/>
    ));
  }

  const getLocations = () => {
    return locations.map(location => <Location key={location.zip} location={location} setLocation={setLocation} findWindows={findWindows}/>)
  }

  useEffect(() => {
    getData();
  }, [location]);

  useEffect(() => {
    findWindows();
  }, [weather]);

  return (
    <div className='App'>
      <Header />
      <main>
        <Switch>
          <Route path='/error'>
            <p className="error-message">
              {`Sorry, we have encountered a problem! ${errorMsg}`}
            </p>
          </Route>
          <Route path='/activities'>
            {getActivities()}
          </Route>
          <Route path='/locations'>
            {getLocations()}
          </Route>
          <Route exact path='/'>
            {errorMsg && <Redirect to='/error'/>}
            {weather && getHomePage()}
          </Route>
          <Route>
            <Redirect to='/error'/>
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
