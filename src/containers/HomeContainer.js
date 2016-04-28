import React from 'react';
import Search from '../components/Search';
import styles from '../styles';
const { headerShadow } = styles;

const HomeContainer = React.createClass ({
  render() {
    return (
      <div className='container-fluid'>
        <div style={{paddingTop: '25%'}} className='col-sm-12 text-center'>
          <h1 style={headerShadow}>
            Enter a City and State
          </h1>
        </div>
        <div className='col-sm-12 text-center'>
          <div>
            <Search />
          </div>
        </div>
      </div>
    );
  }
});

export default HomeContainer;
