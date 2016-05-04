import React from 'react';
import { Link } from 'react-router';
import SearchContainer from '../containers/SearchContainer';

class NavbarContainer extends React.Component {
  render() {
    return (
      <nav className='navbar navbar-default' style={{margin: 0}}>
        <div className='container-fluid bg-primary'>
          <div className='navbar-header'>
            <Link to='/home'>
              <div className='navbar-brand'>
                <span 
                  style={{color: 'white', fontSize: '2em', lineHeight: 'inherit'}}
                  className='glyphicon glyphicon-cloud'>
                </span>
              </div>
              <span className='navbar-brand' style={{color: 'white'}}>
                Ian's Weather App
              </span>
            </Link>
          </div>
          <SearchContainer classNames='pull-right' />
        </div>
      </nav>
    );
  }
}

export default NavbarContainer;
