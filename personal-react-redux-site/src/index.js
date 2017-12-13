import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import rootReducer from './redux';


import App from './components/App';

const store = createStore(rootReducer, applyMiddleware(thunk));
store.subscribe(() => {
  console.log(store.getState());
});

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
  <App/>
  </BrowserRouter>

  </Provider>, document.getElementById('root'));
