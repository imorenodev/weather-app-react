import React from 'react';
import Days from '../components/Days';
import weatherHelpers from '../utils/weatherHelpers';
require('../styles/main.css');

const ForecastContainer = React.createClass ({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState() {
    return {
      weatherForecast: []
    }
  },
  componentDidMount() {
    var query = this.props.location.query;

    weatherHelpers.getWeatherInfo(query.cityAndState)
    .then(function(sevenDayForecastList) {
      this.setState({
        weatherForecast: sevenDayForecastList
      });
    }.bind(this));
  },
  componentWillReceiveProps() {
    var query = this.props.location.query;

    weatherHelpers.getWeatherInfo(query.cityAndState)
    .then(function(sevenDayForecastList) {
      this.setState({
        weatherForecast: sevenDayForecastList
      });
    }.bind(this));
  },
  setWeatherInfoState() {
    var query = this.props.location.query;

    weatherHelpers.getWeatherInfo(query.cityAndState)
    .then(function(sevenDayForecastList) {
      this.setState({
        weatherForecast: sevenDayForecastList
      });
    }.bind(this));
  },
  render() {
    console.log(this.props.location.query.cityAndState, this.state.weatherForecast);
    const cityAndState = this.props.location.query.cityAndState 
      ? this.props.location.query.cityAndState
      : 'Denville, NJ';

    return (
      <div>
        <h1 className='header-large-thin'>
          {cityAndState}
        </h1>
        <div className='col-sm-12 text-center'>
          <Days forecast={this.state.weatherForecast} />
        </div>
      </div>
    );
  }
});

module.exports = ForecastContainer;
