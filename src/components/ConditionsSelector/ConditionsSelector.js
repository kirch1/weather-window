import PropTypes from 'prop-types';
import { useEffect } from 'react';
import './ConditionsSelector.css';
import RangeSlider from './RangeSlider/RangeSlider';

const ConditionsSelector = ({conditions}) => {
  const {temp, setTemp, wind, setWind, rain, setRain, snow, setSnow, humidity, setHumidity, findWindows} = conditions;
  useEffect(() => {
    findWindows();
  }, [temp, wind, rain, snow, humidity])

  return(
    <div className='card conditions-selector-card'>
      <p className='card-title'>Select Desired Conditions</p>
      <form className='conditions-selector-flex'>
        <div className='conditions-selector-col'>
          <RangeSlider title='Temperature (&#8457;)' min={-50} max={150} values={temp} setRange={setTemp}/>
          <RangeSlider title='Wind (mph)' min={0} max={100} values={wind} setRange={setWind}/>
        </div>
        <div className='conditions-selector-col'>
          <RangeSlider title='Rain Chance (%)' min={0} max={100} values={rain} setRange={setRain}/>
          <RangeSlider title='Snow Chance (%)' min={0} max={100} values={snow} setRange={setSnow}/>
        </div>
        <div className='conditions-selector-col'>
          <RangeSlider title='Humidity (%)' min={0} max={100} values={humidity} setRange={setHumidity}/>
        </div>
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
