import Header from "./components/Header/Header";
import CurrentWeather from "./components/CurrentWeather/CurrentWeather";
import getWeather from "./api";
import ConditionsSelector from "./components/ConditionsSelector/ConditionsSelector";
import DailyForecast from "./components/DailyForecast/DailyForecast";
import { useEffect, useState } from "react";
import "./App.css";
import { Redirect, Route, Switch } from "react-router-dom";
import { Activities } from "./components/Activities/Activities";

function App() {
  const [location, setLocation] = useState("denver");
  const [weather, setWeather] = useState(null);
  const [windows, setWindows] = useState([]);
  const [temp, setTemp] = useState([-20, 120]);
  const [wind, setWind] = useState([0, 100]);
  const [rain, setRain] = useState([0, 100]);
  const [snow, setSnow] = useState([0, 100]);
  const [humidity, setHumidity] = useState([0, 100]);
  const [errorMsg, setError] = useState("");

  const getData = async () => {
    setWeather(await getWeather(location, 3, setError));
  };

  const findWindows = () => {
    const checkRange = (x, min, max) => x >= min && x <= max;

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
  };

  const getForecastDays = () => {
    return weather.forecast.forecastday.map((forecast) => {
      return (
        <DailyForecast forecast={forecast} key={forecast.date_epoch} windows={windows}/>
      );
    });
  };

  const conditionProps = { 
    temp, setTemp, 
    wind, setWind, 
    rain, setRain, 
    snow, setSnow, 
    humidity, setHumidity,
    findWindows
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="App">
      <Header />
      {weather && <CurrentWeather location={weather.location} current={weather.current} />}
      <Switch>
        <Route path="/error">
          <p>Error</p>
        </Route>
        <Route path="/activities">
          <Activities conditions={conditionProps}/>
        </Route>
        <Route exact path="/">
          {weather && <>
            <ConditionsSelector conditions={conditionProps} />
            <div className="forecast-days-parent">
              {getForecastDays()}
            </div>
          </>}
        </Route>
        <Route>
          <Redirect to="error" />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
