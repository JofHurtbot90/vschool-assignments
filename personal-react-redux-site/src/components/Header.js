import React from 'react';
import {Link} from 'react-router-dom';

export default function Header() {
  const styles = {
      fontSize: '35px',
      fontFamily: 'Hind Vadodara: 400',
      color: 'steelblue',
      textAlign: 'center',
  }
  return(
    <header style={styles}>
      <div>
        WEATHER
      </div>
      <div>
        <h5>
          Powered by Dark Sky
        </h5>
      </div>
  <div>
    <Link to='/'>Home</Link>
    <Link to='/about'>About</Link>
    <Link to='/cities'>Cities</Link>
  </div>
  </header>
  )
}
