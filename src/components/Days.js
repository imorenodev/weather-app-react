import React from 'react';
import Day from './Day';
require('../styles/main.css');

const Days = ({ forecast, onSelectDay }) => {
  return (
    <ul className='flex-container'>
        {forecast.map((day, index) => (
          <Day 
            key={index} 
            onSelectDay={onSelectDay} 
            day={day.day} 
            weatherId={day.weatherId} />
        ))}
    </ul>
  );
};

export default Days;
