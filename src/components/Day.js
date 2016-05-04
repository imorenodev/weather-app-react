import React from 'react';
import { Link } from 'react-router';
import { dayIsToday } from '../utils/weatherHelpers.js';
import '../styles/main.css';

const Day = ({ onSelectDay, day, weatherId }) => {
  const today = dayIsToday(day) ? 'Today' : null;
  return(
    <li 
      onClick={onSelectDay.bind(null, day)} 
      className={`flex-item ${today}`}>
      <h2>{today ? today : day}</h2>
      <span style={{textAlign: 'center'}}>
        <i className={`wi wi-owm-${weatherId}`} ></i>
      </span>
    </li>
  );
}

export default Day;
