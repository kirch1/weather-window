import Header from './components/Header/Header';
import {getForecast} from './api';
import './App.css';

function App() {
  getForecast('67401', 3);

  return (
    <div className="App">
      <Header />
      <main></main>
    </div>
  );
}

export default App;
