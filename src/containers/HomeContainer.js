import React from 'react';
import SearchContainer from '../containers/SearchContainer';
require('../styles/main.css');

const HomeContainer = React.createClass ({
  render() {
    return (
      <div className='container-fluid'>
        <div style={{paddingTop: '25%'}} className='col-sm-12 text-center'>
          <h1 className='header-shadow'>
            Enter a City and State
          </h1>
        </div>
        <div className='col-sm-12 text-center'>
          <div>
            <SearchContainer />
          </div>
        </div>
      </div>
    );
  }
});

export default HomeContainer;
