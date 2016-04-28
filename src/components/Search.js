import React from 'react';

var Search = React.createClass ({
  render() {
    return (
      <form className={`navbar-form ${this.props.classNames}`} role='search'>
        <div style={{marginRight: '10px'}} className='form-group'>
          <input 
            type='text' 
            className='form-control' 
            placeholder='City, State' />
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
