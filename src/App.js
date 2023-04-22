import Header from './components/Header/Header';
import CurrentWeather from './components/CurrentWeather/CurrentWeather';
import getWeather from './api';
import ConditionsSelector from './components/ConditionsSelector/ConditionsSelector';
import DailyForecast from './components/DailyForecast/DailyForecast';
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [location, setLocation] = useState('boulder, co');
  const [weather, setWeather] = useState(null);
  const [errorMsg, setError] = useState('');

  const getData = async () => {
    setWeather(await getWeather(location, 3, setError));
  }

  const getForecastDays = () => {
    return weather.forecast.forecastday.map(forecast => <DailyForecast forecast={forecast} key={forecast.date_epoch}/>);
  }

  useEffect(() => {
    getData();
  }, [])

  return (
    <div className="App">
      {weather ?
        <>
          <Header time={weather.location.localtime}/>
          <main>
            <CurrentWeather location={weather.location} current={weather.current}/> 
            <ConditionsSelector />
            {getForecastDays()}
          </main>
        </> :
        <p>Loading</p>}
    </div>
  );
}

export default App;
