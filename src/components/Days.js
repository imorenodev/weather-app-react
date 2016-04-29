import React from 'react';
import Day from './Day';
require('../styles/main.css');

const Days = React.createClass({
  render() {
    return (
      <ul className='flex-container'>
          {this.props.forecast.map((day, index) => (
            <Day 
              key={index} 
              onSelectDay={this.props.onSelectDay} 
              day={day.day} 
              weatherId={day.weatherId} />
          ))}
      </ul>
    );
  }
});

export default Days;
