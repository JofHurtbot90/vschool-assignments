import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import contents from './game-content/content';

const rootReducer = combineReducers({
contents
})

export default createStore(rootReducer, applyMiddleware(thunk));
