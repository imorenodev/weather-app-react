import React from 'react';
import NavbarContainer from './NavbarContainer';
import styles from '../styles';
const { backgroundGradient } = styles;

export default class App extends React.Component {
  render() {
    return (
      <div className='main-container' style={backgroundGradient}> 
        <NavbarContainer />
        {this.props.children}
      </div>
    );
  }
}
