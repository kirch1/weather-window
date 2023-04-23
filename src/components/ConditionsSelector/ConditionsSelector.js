import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import './ConditionsSelector.css';
import RangeInput from './RangeInput/RangeInput';

const ConditionsSelector = ({conditions}) => {
  const {temp, setTemp, wind, setWind, rain, setRain, snow, setSnow, humidity, setHumidity, findWindows} = conditions;
  useEffect(() => {
    findWindows();
  }, [temp, wind, rain, snow, humidity])

  return(
    <div className='conditions-selector-parent'>
      <form className='conditions-selector-flex'>
        <RangeInput title='Temperature (&#8457;)' min={-50} max={150} values={temp} setRange={setTemp}/>
        <RangeInput title='Wind (mph)' min={0} max={100} values={wind} setRange={setWind}/>
        <RangeInput title='Rain Chance (%)' min={0} max={100} values={rain} setRange={setRain}/>
        <RangeInput title='Snow Chance (%)' min={0} max={100} values={snow} setRange={setSnow}/>
        <RangeInput title='Humidity (%)' min={0} max={100} values={humidity} setRange={setHumidity}/>
      </form>
    </div>
  )
}

export default ConditionsSelector;

ConditionsSelector.propTypes = {
  conditions: PropTypes.shape({
    temp: PropTypes.array.isRequired,
    wind: PropTypes.array.isRequired,
    rain: PropTypes.array.isRequired,
    snow: PropTypes.array.isRequired,
    humidity: PropTypes.array.isRequired,
    setTemp: PropTypes.func.isRequired,
    setWind: PropTypes.func.isRequired,
    setRain: PropTypes.func.isRequired,
    setSnow: PropTypes.func.isRequired,
    setHumidity: PropTypes.func.isRequired,
    findWindows: PropTypes.func.isRequired
  })
}
