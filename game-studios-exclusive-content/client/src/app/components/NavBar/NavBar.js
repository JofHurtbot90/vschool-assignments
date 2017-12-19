import React from 'react';
import {Link} from 'react-router-dom';

function NavBar(props){
  return(

      <nav className='navbar'>
        <Link to='/'>Studios</Link>
        <Link to='/exclusive-content'>Exclusive Content</Link>
        <Link to='/games'>Games</Link>
      </nav>

  )
}

export default NavBar;
