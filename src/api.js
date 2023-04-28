const getWeather = async (location, days, setError) => {
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
      'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
    }
  };
  
  try {
    const response = await fetch(`https://weatherapi-com.p.rapidapi.com/forecast.json?q=${location}&days=${days}`, options);
    if(!response.ok) {
      throw new Error(response.status);
    }
    const data = await response.json();
    return data;
  }catch(error) {
    setError(error.toString());
  }
}

export default getWeather;
