import Header from './components/Header/Header';
import CurrentWeather from './components/CurrentWeather/CurrentWeather';
import getWeather from './api';
import './App.css';
import ConditionsSelector from './components/ConditionsSelector/ConditionsSelector';
import DailyForecast from './components/DailyForecast/DailyForecast';
import { useEffect, useState } from 'react';

function App() {
  const [location, setLocation] = useState('67401');
  const [weather, setWeather] = useState(null);
  const [errorMsg, setError] = useState('');

  const getData = async () => {
    setWeather(await getWeather(location, 1, setError));
  }

  useEffect(() => {
    getData();
  }, [])

  return (
    <div className="App">
      <Header />
      <main>
        {weather ? <CurrentWeather location={weather.location} current={weather.current}/> : <p>Loading</p>}
        <ConditionsSelector />
        <DailyForecast />
      </main>
    </div>
  );
}

export default App;
