export function add(timezone){
  return{
    type: 'ADD',
    item
  }
}

export default function reducer(prevState = [], action){
  switch(action.type){
    case 'ADD':
      return [...prevState, action.timezone];
    default:
    return prevState;
  }
}
