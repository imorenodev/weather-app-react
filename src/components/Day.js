import React from 'react';
import { Link } from 'react-router';
import moment from 'moment';
require('../styles/main.css');

const Day = React.createClass({
  render() {
    const today = this.props.day === moment().format('dddd') ? 'Today' : null;
    return(
      <li 
        onClick={this.props.onSelectDay.bind(null, this.props.day)} 
        className={`flex-item ${today}`}>
        <h2>{today ? today : this.props.day}</h2>
        <span style={{textAlign: 'center'}}>
          <i className={`wi wi-owm-${this.props.weatherId}`} ></i>
        </span>
      </li>
    );
  }
});

export default Day;
