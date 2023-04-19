import './App.css';
import getWeather from './api';

function App() {

  getWeather('67401', 3);

  return (
    <div className="App">
      <main></main>
    </div>
  );
}

export default App;
