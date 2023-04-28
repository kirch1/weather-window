import Header from "../Header/Header";
import { Activity } from "../Activity/Activity";
import { Location } from "../Location/Location";
import CurrentWeather from "../CurrentWeather/CurrentWeather";
import ConditionsSelector from "../ConditionsSelector/ConditionsSelector";
import DailyForecast from "../DailyForecast/DailyForecast";
import getWeather from "../../api";
import { useEffect, useState } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import cleanWeatherData from "../../utilities";
import activities from "../../activitiesData";
import locations from "../../locationsData";
import { conditionsData } from "../../conditionsData";
import "./App.css";

function App() {
  const [location, setLocation] = useState("80227");
  const [weather, setWeather] = useState();
  const [windows, setWindows] = useState([]);
  const [conditions, setConditions] = useState(conditionsData);
  const [errorMsg, setError] = useState("");

  const getData = async () => {
    const rawData = await getWeather(location, 3, setError);
    if (rawData) {
      const cleanData = cleanWeatherData(rawData);
      setWeather(cleanData);
    }
  };

  const findWindows = () => {
    const checkRange = (x, values) => x >= values[0] && x <= values[1];
    const {temp, wind, rain, snow, humidity} = conditions;
    if(weather) {
      const windows = weather.forecast.forecastday.reduce((acc, day) => {
        day.hour.forEach(hour => {
          if((!temp.enabled || checkRange(hour.temp_f, conditions.temp.values)) &&
            (!wind.enabled || checkRange(hour.wind_mph, wind.values)) &&
            (!rain.enabled || checkRange(hour.chance_of_rain, rain.values)) &&
            (!snow.enabled || checkRange(hour.chance_of_snow, snow.values)) &&
            (!humidity.enabled || checkRange(hour.humidity, humidity.values))){
              acc.push(hour.time_epoch);
            }
          });
        return acc;
      }, []);
      setWindows(windows);
    }
  };

  const getHomePage = () => {
    const forecastDays = weather.forecast.forecastday.map((forecast) => {
      return (
        <DailyForecast
          forecast={forecast}
          key={forecast.date_epoch}
          windows={windows}
        />
      );
    });
    return (
      <>
        <div className="main-upper">
          <CurrentWeather
            location={weather.location}
            current={weather.current}
          />
          <ConditionsSelector
            conditions={conditions}
            setConditions={setConditions}
          />
        </div>
        {forecastDays}
      </>
    );
  };

  const activityDisplay = activities.map(activity => (
    <Activity
      key={activity.name}
      activity={activity}
      conditions={conditions}
      setConditions={setConditions}
    />
  ));

  const locationDisplay = locations.map(location => (
    <Location
      key={location.zip}
      location={location}
      setLocation={setLocation}
    />
  ));

  useEffect(() => {
    getData();
  }, [location]);

  useEffect(() => {
    findWindows();
  }, [weather, conditions]);

  return (
    <div className="App">
      <Header />
      <main>
        <Switch>
          <Route path="/error">
            <p className="error-message">
              {`Sorry, we have encountered a problem! ${errorMsg}`}
            </p>
          </Route>
          <Route path="/activities">{activityDisplay}</Route>
          <Route path="/locations">{locationDisplay}</Route>
          <Route exact path="/">
            {errorMsg && <Redirect to="/error" />}
            {weather && getHomePage()}
          </Route>
          <Route>
            <Redirect to="/error" />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
