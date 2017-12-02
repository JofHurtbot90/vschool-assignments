import React from 'react';
import {connect} from 'react-redux';
import locations from './data/locations.json';

function ContactsList(props) {

  const contacts = locations.map((contact, i) =>{
    return(
      <div>
        <li key={contact.title + i}>{contact.description}{contact.img}></li>
        <li src={contact.imgURL} alt={`${contact.title}`}></li>

      </div>
    )
    })

  return (
    <ul>
    {contacts}
  </ul>)
}
  function mapStateToProps(state) {
    return state;
  }


export default connect(mapStateToProps, null)(ContactsList)
