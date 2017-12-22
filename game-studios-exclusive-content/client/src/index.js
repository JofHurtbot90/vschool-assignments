import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
// import {createStore, applyMiddleware} from 'redux';
// import thunk from 'redux-thunk';
//
// import {Provider} from  'react-redux';
// import rootReducer from './redux';
//
// const store = createStore(rootReducer, applyMiddleware(thunk));
// store.subscribe(() => {
//   console.log(store.getState());
// });

import App from './app/App';

ReactDOM.render(
  // <Provider store={store}>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  // </Provider>

  , document.getElementById('root'));
