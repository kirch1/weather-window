import Header from './components/Header/Header';
import CurrentWeather from './components/CurrentWeather/CurrentWeather';
import {getForecast} from './api';
import './App.css';

function App() {
  getForecast('67401', 3);

  return (
    <div className="App">
      <Header />
      <main>
        <CurrentWeather />
      </main>
    </div>
  );
}

export default App;
