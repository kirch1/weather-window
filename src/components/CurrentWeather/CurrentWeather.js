import './CurrentWeather.css';
import sunny from '../../assets/icons/sunny.svg';

const CurrentWeather = () => {
  return(
    <section className='current-weather-parent'>
      <div>
        <h1 className='current-weather-location'>Denver, CO</h1>
        <div className='current-weather-data'>Sunny - 72&#176; - 12mph</div>
      </div>
      <img src={sunny} alt={'current condition icon'} className='current-weather-icon'/>
    </section>
  )
}

export default CurrentWeather;
