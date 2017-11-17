import React from 'react';

function Name(props){
  return(
    <div>
      <li>{props.name}</li>
    <button onClick={()=>props.delete(props.index)}>x</button>
    </div>
  )


}

export default Name;
