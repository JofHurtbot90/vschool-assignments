import React from 'react';

const styles = {
  textAlign: 'center',
  fontFamily: 'Arial',
  color: 'lightgrey',
  background: 'linear-gradient(to right, #2B32B2, #1488CC)'
}

export default function Header(props){
  return(
    <header style={styles}>
      <h1>Chelsea FC</h1>
    </header>
  )
}
