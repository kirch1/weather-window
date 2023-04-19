const getForecast = async (location, days) => {
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '',
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

export { getForecast };
