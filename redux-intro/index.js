const redux = require('redux');

//Actions: objects that are a set of instructions
// Example:
// {
      // type: 'INCREMENT'
// }
const initialState = 0;

//Reducer's Job: take an action and update the state
function reducer(prevState = 0, action){
  switch(action.type){
    case 'INCREMENT':
      return prevState + 1;
    case 'DECREMENT':
      return prevState - 1;
    case 'INCREASE_BY':
      return prevState + action.amount;
    case 'DECREASE_BY':
      return prevState - action.amount;
    default:
      return prevState;
  }

}
const store = redux.createStore(reducer);




store.subscribe(function() {
  const currState = store.getState();
  console.log(currState);
});

//Action creators: return an action object
function increment(){
  return {
    type: 'INCREMENT'
  }
}

function decrement(){
  return {
    type: 'DECREMENT'
  }
}

function increaseBy(amount) {
  return {
    type: 'INCREASE_BY',
    amount
  }
}

function decreaseBy(amount) {
  return {
    type: 'DECREASE_BY',
    amount
  }
}

store.dispatch(increaseBy(5));
store.dispatch(increaseBy(5));
store.dispatch(decreaseBy(5));
