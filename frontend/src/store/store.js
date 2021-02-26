

import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from "redux-devtools-extension"
import burgerBuilderReducer from './reducers/burgerBuilder';
import orderReducer from './reducers/order';
import authReducer from './reducers/auth';
// import registrationReducer from './reducers/register';




const rootReducer = combineReducers({
                                    burgerBuilder: burgerBuilderReducer,
                                    order: orderReducer,
                                    auth:authReducer,
                                    // registration:registrationReducer
                                 });

const userInfoFromStorage=localStorage.getItem("userInfo")?JSON.parse(localStorage.getItem("userInfo")):null


const initialState={
     
     auth:{userInfo:userInfoFromStorage}
     
}

const middleware=[thunk]
const store = createStore(rootReducer,initialState, composeWithDevTools(
                            applyMiddleware(...middleware)
));

export default store