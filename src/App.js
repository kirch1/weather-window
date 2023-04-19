import Header from './components/Header/Header';
import CurrentWeather from './components/CurrentWeather/CurrentWeather';
import {getForecast} from './api';
import './App.css';
import ConditionsSelector from './components/ConditionsSelector/ConditionsSelector';
import DailyForecast from './components/DailyForecast/DailyForecast';

function App() {
  getForecast('67401', 3);

  return (
    <div className="App">
      <Header />
      <main>
        <CurrentWeather />
        <ConditionsSelector />
        <DailyForecast />
      </main>
    </div>
  );
}

export default App;
