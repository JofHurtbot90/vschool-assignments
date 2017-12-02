export function add(item) {
  return {
    type: 'ADD',
    item
  }
}




export default function reducer(prevState = [], action) {
  switch (action.type) {
    case 'ADD':
      return [...prevState, action.item];
    default:
      return prevState;
  }
}
