const redux = require('redux');

function reducer(prevState = {}, action) {
  switch(action.type) {
    case 'ADD_ITEM':
      return {...prevState, action.add}
  }
}
const store = redux.createStore(reducer);

store.subscribe(function(){
  console.log(store.getState());
  console.log('');
});
