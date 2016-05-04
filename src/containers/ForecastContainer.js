import React from 'react';
import Days from '../components/Days';
import { getWeatherInfo } from '../utils/weatherHelpers';
import '../styles/main.css';

class ForecastContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      weatherForecast: []
    };
  }
  componentDidMount() {
    this.setWeatherInfoState(this.props.routeParams.cityAndState);
  }
  componentWillReceiveProps(nextProps) {
    this.setWeatherInfoState(nextProps.routeParams.cityAndState);
  }
  async setWeatherInfoState(cityAndState) {
    const weatherForecast = await getWeatherInfo(cityAndState);
    this.setState({
      weatherForecast
    });
  }
  handleOnSelectDay(selectedDay) {
    //find selected day in weatherForecast list and pass along to DetailsContainer
    //as routeParams
    const selectedDayWeather = this.state.weatherForecast.filter((day) => day.day === selectedDay)

    this.context.router.push({
      pathname: '/details/' + selectedDay,
      state: {
        weather: selectedDayWeather,
        cityAndState: this.props.routeParams.cityAndState 
      }
    });
  }
  render() {
    const cityAndState = this.props.params.cityAndState 
      ? this.props.params.cityAndState
      : 'Denville, NJ';

    return (
      <div>
        <h1 className='header-large-thin'>
          {cityAndState}
        </h1>
        <div className='col-sm-12 text-center'>
          <Days onSelectDay={this.handleOnSelectDay.bind(this)} forecast={this.state.weatherForecast} />
        </div>
      </div>
    );
  }
}

ForecastContainer.contextTypes = {
    router: React.PropTypes.object.isRequired
}

export default ForecastContainer;
