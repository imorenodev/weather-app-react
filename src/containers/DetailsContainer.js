import React from 'react';
import moment from 'moment';
import { dayIsToday } from '../utils/weatherHelpers.js';
import { Link } from 'react-router';

class DetailsContainer extends React.Component {
  render() {
    const { day, date, conditions, humidity, maxTemp, minTemp, weatherId } = this.props.location.state.weather[0];
    const cityAndState = this.props.location.state.cityAndState;
    const today = dayIsToday(day) ? 'Today' : null;

    return (
      <div className='container-fluid'>
        <div style={{paddingTop: '5%'}} className='col-sm-12 text-center'>
          <h1 className='header-large-thin'>{today ? today : day}'s Forecast</h1>
          <span style={{textAlign: 'center'}}>
            <i style={{fontSize: '10em', marginBottom: '30px'}} className={`wi wi-owm-${weatherId} header-shadow`} ></i>
          </span>
          <h2>{today ? day : null} {date}</h2>
          <h3>{conditions}</h3>
          <h3>Humidity: {humidity}%</h3>
          <h3>MaxTemp: {maxTemp}&#176;F</h3>
          <h3>MinTemp: {minTemp}&#176;F</h3>
        </div>
        <Link to={`/forecast/${cityAndState}`}>
          <button type='button' className='btn btn-lg btn-danger'>Go Back</button>
        </Link>
      </div>
    );
  }
}

export default DetailsContainer;
