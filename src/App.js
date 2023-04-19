import './App.css';
import {getForecast} from './api';

function App() {

  getForecast('67401', 3);

  return (
    <div className="App">
      <main></main>
    </div>
  );
}

export default App;
