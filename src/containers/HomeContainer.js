import React from 'react';
import SearchContainer from '../containers/SearchContainer';
import '../styles/main.css';

class HomeContainer  extends React.Component {
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
}

export default HomeContainer;
