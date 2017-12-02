import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

import App from './components/App';

// const store = createStore(rootReducer);
// store.subscribe(() =>{
//   console.log(store.getState());
// });

ReactDOM.render(
  <Provider>
    <App/>
  </Provider>, document.getElementById('root'));
