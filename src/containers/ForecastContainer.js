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
    this.setWeatherInfoState(this.props.routeParams.cityAndState);
  },
  componentWillReceiveProps(nextProps) {
    this.setWeatherInfoState(nextProps.routeParams.cityAndState);
  },
  setWeatherInfoState(cityAndState) {
    weatherHelpers.getWeatherInfo(cityAndState)
    .then(function(sevenDayForecastList) {
      this.setState({
        weatherForecast: sevenDayForecastList
      });
    }.bind(this));
  },
  handleOnSelectDay(selectedDay) {
    //find selected day in weatherForecast list and pass along to DetailsContainer
    //as routeParams
    const selectedDayWeather = this.state.weatherForecast.filter((day) => day.day === selectedDay)

    this.context.router.push({
      pathname: '/details/' + selectedDay,
      state: {
        weather: selectedDayWeather 
      }
    });
  },
  render() {
    console.log(this.props.params.cityAndState, this.state.weatherForecast);
    const cityAndState = this.props.params.cityAndState 
      ? this.props.params.cityAndState
      : 'Denville, NJ';

    return (
      <div>
        <h1 className='header-large-thin'>
          {cityAndState}
        </h1>
        <div className='col-sm-12 text-center'>
          <Days onSelectDay={this.handleOnSelectDay} forecast={this.state.weatherForecast} />
        </div>
      </div>
    );
  }
});

module.exports = ForecastContainer;
