const cleanHours = (hours) => {
  return hours.map(hour => {
    return {
      time: hour.time,
      time_epoch: hour.time_epoch,
      temp_f: hour.temp_f,
      condition: hour.condition,
      wind_mph: hour.wind_mph,
      wind_degree: hour.wind_degree,
      humidity: hour.humidity,
      feelslike_f: hour.feelslike_f,
      chance_of_rain: hour.chance_of_rain,
      chance_of_snow: hour.chance_of_snow,
      gust_mph: hour.gust_mph
    }
  })
}

const cleanWeatherData = (raw) => {

  const clean = {
    location: {},
    current: {},
    forecast: {}
  };

  clean.location.name = raw.location.name;
  clean.location.region = raw.location.region;
  clean.location.localtime = raw.location.localtime;
  clean.location.localtime_epoch = raw.location.localtime_epoch;

  clean.current.last_updated = raw.current.last_updated;
  clean.current.temp_f = raw.current.temp_f;
  clean.current.condition = raw.current.condition;
  clean.current.wind_mph = raw.current.wind_mph;
  clean.current.wind_degree = raw.current.wind_degree;
  clean.current.wind_dir = raw.current.wind_dir;
  clean.current.humidity = raw.current.humidity;
  clean.current.feelslike_f = raw.current.feelslike_f;
  clean.current.gust_mph = raw.current.gust_mph;

  clean.forecast.forecastday = raw.forecast.forecastday.map(day => {
    return {
      date: day.date,
      date_epoch: day.date,
      day: {
        mintemp_f: day.day.mintemp_f,
        maxtemp_f: day.day.maxtemp_f,
        condition: day.day.condition,
      },
      hour: cleanHours(day.hour)
    }
  })

  return clean;
}

export default cleanWeatherData;
