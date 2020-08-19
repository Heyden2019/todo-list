import {combineReducers, createStore, applyMiddleware} from "redux";
import issuePageReducer from "./issue-reducer";
import { reducer as formReducer } from 'redux-form';
import thunkMiddleware from "redux-thunk"


let  reducers = combineReducers({
    issuePage: issuePageReducer,
    form: formReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;

// window.store = store;