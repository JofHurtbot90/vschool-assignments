import React from 'react';

function ContactCard(props){
  return(
    <div>
      <h1>props.person.name</h1>
      <h3>props.person.age</h3>
    <button onClick={props.handleDelete}>Delete</button>
    </div>
  )
}
export default ContactCard;
