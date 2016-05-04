import React from 'react';

class SearchContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      cityAndState: ''
    };
  }
  handleUpdateCityState(e) {
    this.setState({
      cityAndState: e.target.value
    });
  }
  handleOnFocus(e) {
    e.target.placeholder = '';
  }
  handleOnBlur(e) {
    e.target.placeholder = 'ex: Denville, NJ';
  }
  handleSubmitCityState(e) {
    e.preventDefault();
    let cityAndState = this.state.cityAndState;

    this.setState({
      cityAndState: ''
    });

    this.context.router.push('/forecast/' + cityAndState);
  }
  render() {
    return (
      <form onSubmit={this.handleSubmitCityState.bind(this)} className={`navbar-form ${this.props.classNames}`} role='search'>
        <div style={{marginRight: '10px'}} className='form-group'>
          <input 
            type='text' 
            className='form-control' 
            onFocus={this.handleOnFocus.bind(this)}
            onBlur={this.handleOnBlur.bind(this)}
            onChange={this.handleUpdateCityState.bind(this)}
            value={this.state.cityAndState}
            placeholder='ex: Denville, NJ'
          />
        </div>
        <button 
          type='submit' 
          className='btn btn-success'>
          Get Weather
        </button>
      </form>
    );
  }
}

SearchContainer.contextTypes = {
  router: React.PropTypes.object.isRequired
};

export default SearchContainer;
