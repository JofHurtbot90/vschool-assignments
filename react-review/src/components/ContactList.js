import React, {Component} from 'react';
import ContactCard from './ContactCard';

class ContactList extends Component {
  constructor() {
    super();
    this.state = {

      contacts: [
        {
          name: 'Josh',
          age: 27
        }, {
          name: 'Joe',
          age: 33
        }, {
          name: 'Jameson',
          age: 45
        }
      ]
    }
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(name) {

    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(person => person.name !== name)
      }
    });
  }

  render() {
    const contacts = this.state.contacts.map(contact, index) => {
      return (<ContactCard handleDelete={this.handleDelete} key={contact.name + index} person={contact}/>)
    }

    return ({contacts})
  }
}
export default ContactList;
