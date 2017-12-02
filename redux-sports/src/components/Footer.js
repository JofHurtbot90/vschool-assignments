import React from 'react';

const styles = {
  textAlign: 'center',
  fontFamily: 'Arial',
  color: 'lightgrey',
  background: 'linear-gradient(to right, #9D50BB, #6E48AA)',
  padding: '45%'
}

export default function Footer(props){
  return(
    <footer style={styles}>
      <h1>Barclay Premiere League</h1>
    </footer>
  )
}
