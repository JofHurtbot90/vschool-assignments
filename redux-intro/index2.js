const redux = require('redux');

function reducer(prevState = [], action) {
  switch(action.type) {
    case 'ADD_CONTACT':
      return [...prevState, action.contact]
    case 'REMOVE_CONTACT':
      return prevState.filter(contact => contact.email !== action.email);
      default:
        return prevState
  }
}

function addContact(contact) {
  return {
    type: 'ADD_CONTACT',
    contact
  }
}

function removeContact(email) {
  return {
    type: 'REMOVE_CONTACT',
    email
  }
}
const store = redux.createStore(reducer);

store.subscribe(function() {
  console.log(store.getState());
  console.log('');
});

store.dispatch(addContact(
  {
    name: 'John',
    phone: '234-432-2342',
    email: 'j@j.com'
  }
))
store.dispatch(addContact(
  {
    name: 'Jameson',
    phone: '134-562-9682',
    email: 'j@t.com'
  }
))
store.dispatch(removeContact('j@j.com'))
