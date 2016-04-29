import React from 'react';
import moment from 'moment';

const DetailsContainer = React.createClass ({
  render() {
    const { day, date, conditions, humidity, maxTemp, minTemp, weatherId } = this.props.location.state.weather[0];
    const today = day === moment().format('dddd') ? 'Today' : null;

    return (
      <div className='container-fluid'>
        <div style={{paddingTop: '5%'}} className='col-sm-12 text-center'>
          <h1>{today ? today : day}'s Forecast</h1>
          <span style={{textAlign: 'center'}}>
            <i style={{fontSize: '10em'}} className={`wi wi-owm-${weatherId}`} ></i>
          </span>
          <h2>{date}</h2>
          <h3>{conditions}</h3>
          <h3>{humidity}</h3>
          <h3>{maxTemp}</h3>
          <h3>{minTemp}</h3>
        </div>
      </div>
    );
  }
});

module.exports = DetailsContainer;
