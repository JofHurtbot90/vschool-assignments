import React from 'react';
import {Link} from 'react-router-dom';

function NavBar(props){
  const styles = {
    textAlign: 'center',
    fontSize: '35px',
    fontFamily: 'Cuprum: 400'

  }
  return(
    <div>
      <header style={styles}>The Goods</header>

        <nav className='navbar' style={styles}>
          <Link to='/'>Exclusive Content</Link>
          <Link to='/games'>Games</Link>
        </nav>

    </div>

  )
}

export default NavBar;
