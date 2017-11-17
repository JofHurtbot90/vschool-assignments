import React from 'react';

class Boxes extends React.Component {
  constructor(props) {
    super(props);
    const styles = {
      height: `100px`,
      width: `25%`,
      border: `solid black 2px`,
      display: `inline-block`,
      verticalAlign: `top`
    }
    return(
      <div style={styles}>
        {props.height}
        {props.width}
        {props.border}
        {props.display}
        {props.verticalAlign}
      </div>
    )
  }

}

export default Boxes;
