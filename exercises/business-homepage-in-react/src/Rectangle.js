import React from 'react';


function Rectangle(props) {
  const styles = {
    height: "100px";
    width: "25%";
    border: "solid black 2px";
    display: "inline-block";
    verticalAlign: "top";
  }
  return(
    <div style={styles}>
      {props.description}
    </div>
  )
}
export default Rectangle;
