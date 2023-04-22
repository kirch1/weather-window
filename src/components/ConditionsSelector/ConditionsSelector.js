import { useState } from 'react';
import './ConditionsSelector.css';
import RangeInput from './RangeInput/RangeInput';

const ConditionsSelector = () => {
  const [temp, setTemp] = useState([0, 150]);
  const [wind, setWind] = useState([0, 100]);
  const [rain, setRain] = useState([0, 100]);
  const [snow, setSnow] = useState([0, 100]);
  const [humidity, setHumidity] = useState([0, 100]);

  return(  
    <form className='conditions-selector-parent'>
      <RangeInput title='Temperature (&#8457;)' min={-50} max={150} values={temp} setRange={setTemp}/>
      <RangeInput title='Wind (mph)' min={0} max={100} values={wind} setRange={setWind}/>
      <RangeInput title='Rain Chance (%)' min={0} max={100} values={rain} setRange={setRain}/>
      <RangeInput title='Snow Chance (%)' min={0} max={100} values={snow} setRange={setSnow}/>
      <RangeInput title='Humidity (%)' min={0} max={100} values={humidity} setRange={setHumidity}/>
    </form>
  )
}

export default ConditionsSelector;
