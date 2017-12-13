import axios from 'axios';

export function addForecast(timezone){
  return{
    type: 'ADD_FORECAST',
    timezone
    
  }
}

export function getAllForecast(){
  return(dispatch) =>{
    axios.get('http://cors.vschool.io/?url=https://api.darksky.net/forecast/33722c235dde0e1f98b2c0963306637e/37.8267,-122.4233/').then(response =>{
      dispatch({
        type: 'GET_ALL_FORECAST',
        forecast: response.data
      })
    })
  }
}



export default function reducer(prevState = [], action){
  switch(action.type){
    case 'ADD_FORECAST':
      return [...prevState, action.timezone];
    case 'GET_ALL_FORECAST':
      return action.forecast
    default:
    return prevState;
  }
}
