

import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from "redux-devtools-extension"
import burgerBuilderReducer from './reducers/burgerBuilder';
import orderReducer from './reducers/order';



const rootReducer = combineReducers({
                                    burgerBuilder: burgerBuilderReducer,
                                    order: orderReducer
                      });

const middleware=[thunk]
const store = createStore(rootReducer, composeWithDevTools(
                            applyMiddleware(...middleware)
));

export default store