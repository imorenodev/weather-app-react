import React from 'react';
import NavbarContainer from './NavbarContainer';
import '../styles/main.css';

export default class App extends React.Component {
  render() {
    return (
      <div className='main-container background-gradient'> 
        <NavbarContainer />
        {this.props.children}
      </div>
    );
  }
}
