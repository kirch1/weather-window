const getWeather = async (location, days) => {
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '3e76fac829msh9e23f2f8b2c65cbp1bd78ajsn60031c28c34a',
      'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
    }
  };
  
  try {
    const response = await fetch(`https://weatherapi-com.p.rapidapi.com/forecast.json?q=${location}&days=${days}`, options);
    const data = await response.json();
    console.log(data)
  }catch(err) {
    console.error(err);
  }
}

export default getWeather;
