import axios from 'axios';
import moment from 'moment';

const GOOGLE_API_KEY = 'AIzaSyB_FH2e2mYddKiXkHOIrro9foBPAeVPi8g';
const WEATHER_API_KEY = 'e2fc329e868fb6f7fa6ff16c676d61ef';

//sort API payload Monday-Sunday
const sortForecastList = (forecastList) => {
  let indexOfMonday = 0;

  forecastList.forEach((day, index) => {
    if (day.day === 'Monday') indexOfMonday = index;
  });

  return forecastList.slice(indexOfMonday).concat(forecastList.slice(0, indexOfMonday));
}

const sevenDayForecast = (listOfDays) => {
  return listOfDays = listOfDays.map((index) => {
    return {
      day: moment.unix(index.dt).format('dddd'),
      date: moment.unix(index.dt).format('MMMM do, YYYY'),
      humidity: index.humidity,
      minTemp: index.temp.min,
      maxTemp: index.temp.max,
      conditions: index.weather[0].main,
      weatherId: index.weather[0].id
    }
  })
}

const getWeather = (locCoords) => {
  //return weatherAPI object
  return axios.get(`http://api.openweathermap.org/data/2.5/forecast/daily?lat=${locCoords[0][0]}&lon=${locCoords[0][1]}&appid=${WEATHER_API_KEY}&units=imperial&cnt=7`)
  .then(function(info) {
    return sevenDayForecast(info.data.list);
  })
}

const getLatLong = (city, state) => {
  //return lattitude and longitude
  return axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${city},+${state}&key=${GOOGLE_API_KEY}`)
  .then(function(info) {
    return [].concat(info.data.results[0].geometry.location.lat)
             .concat(info.data.results[0].geometry.location.lng);
  });
}

const getCity = (cityAndState) => {
  const commaIndex = cityAndState.indexOf(',');

 
  return commaIndex !== -1 
    ? cityAndState.slice(0, commaIndex)
    : cityAndState.slice(0, -2);
}
const getState = (cityAndState) => {
  return cityAndState.slice(-2, cityAndState.length);
}

const helpers = {
  //funciton will take in city and state
  //call getLatLong to get location coordinates
  //then call getWeather with coords
  //create 7-day forecast collection to be consumed by components
  getWeatherInfo: function(cityAndState) { 
    //check for valid city, state entry
    cityAndState.length >= 5 ? null : cityAndState = 'Denville, NJ';

    return axios.all([getLatLong(getCity(cityAndState), getState(cityAndState))])
        .then(function(info) {
          return getWeather(info);
        })
  }
}

module.exports = helpers;
