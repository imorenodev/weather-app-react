import React from 'react';
import { Link } from 'react-router';
import Search from '../components/Search';

const NavbarContainer = React.createClass ({
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
          <Search classNames='pull-right' />
        </div>
      </nav>
    );
  }
});

export default NavbarContainer;
