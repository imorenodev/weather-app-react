import React from 'react';

var Search = React.createClass ({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState() {
    return {
      cityAndState: ''
    }
  },
  handleUpdateCityState(e) {
    this.setState({
      cityAndState: e.target.value
    });
  },
  handleOnFocus(e) {
    e.target.placeholder = '';
  },
  handleOnBlur(e) {
    e.target.placeholder = 'ex: Denville, NJ';
  },
  handleSubmitCityState(e) {
    e.preventDefault();
    let cityAndState = this.state.cityAndState;

    this.setState({
      cityAndState: ''
    });

    this.context.router.push('/forecast/' + cityAndState);
  },
  render() {
    return (
      <form onSubmit={this.handleSubmitCityState} className={`navbar-form ${this.props.classNames}`} role='search'>
        <div style={{marginRight: '10px'}} className='form-group'>
          <input 
            type='text' 
            className='form-control' 
            onFocus={this.handleOnFocus}
            onBlur={this.handleOnBlur}
            onChange={this.handleUpdateCityState}
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
});

module.exports = Search;
