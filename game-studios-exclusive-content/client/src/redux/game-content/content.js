import axios from 'axios';

export function getContent(){
  return dispatch =>{
    axios.get('/content').then(response =>{
      dispatch({
        type: 'GET_CONTENT',
        contents: response.contents
      });
    });
  }
}

export function addContent(content){
  return dispatch =>{
    axios.post('/content', content).then(response =>{
      dispatch({
        type: 'ADD_CONTENT',
        contents: response.contents
      });
    });
  }
}

export function deleteContent(id){
  return dispatch =>{
    axios.delete(`/content/${id}`).then(response =>{
      dispatch({
        type: 'DELETE_CONTENT',
        contents: response.contents
      });
    });
  }
}

export default function reducer(prevState = [], action){
  switch (action.type) {
    case 'GET_CONTENT':
      return action.contents;
    case 'ADD_CONTENT':
      return [...prevState, action.contents];
    case 'DELETE_CONTENT':
      return prevState.filter(contents => contents ._id !== action.contents._id);
    default:
      return prevState;

  }
}
