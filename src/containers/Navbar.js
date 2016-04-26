import React from 'react';

const Navbar = () => {
  return (
    <nav className='navbar navbar-default'>
      <div className='container-fluid bg-info'>
        <div className='navbar-header'>
          <a className='navbar-brand' href='#'>
            <span style={{fontSize: '2em', lineHeight: 'inherit'}} className='glyphicon glyphicon-cloud'></span>
          </a>
        </div>
        <div className='navbar-brand'>
          Ian's Weather App
        </div>
        <form className="navbar-form navbar-right" role="search">
          <div className="form-group">
            <input type="text" className="form-control" placeholder="Search" />
          </div>
          <button type="submit" className="btn btn-default">Submit</button>
        </form>
      </div>
    </nav>
  );
}

export default Navbar;
