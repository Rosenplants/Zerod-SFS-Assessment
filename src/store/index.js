import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import debts from './debts';
import checkedRows from './checkedRows';
import totalBalance from './totalBalance';

const reducer = combineReducers({ debts, checkedRows, totalBalance });

const store = createStore(reducer, applyMiddleware(thunkMiddleware));

export default store;
