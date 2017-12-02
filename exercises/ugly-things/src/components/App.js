import React from 'react';
import Header from './Header';
import AddContactForm from './contacts/AddContactForm';
import ContactsList from './contacts/ContactsList';

export default function App(props) {
  return(
    <h1>
      <Header/>
      <AddContactForm/>
      <ContactsList/>
    </h1>
  )
}
