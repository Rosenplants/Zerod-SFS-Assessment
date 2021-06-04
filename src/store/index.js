import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import debts from './debts';

const reducer = combineReducers({ debts });

const store = createStore(reducer, applyMiddleware(thunkMiddleware));

export default store;
