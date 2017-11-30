import React from 'react';

const styles = {
  textAlign: 'center',
  color: 'whitesmoke',
  background: 'linear-gradient(to right, #ff5e62, #ff9966)'
}

export default function Header(props) {
  return(
    <header style = {styles}>
      <h1>Contacts</h1>
    </header>
  )
}
