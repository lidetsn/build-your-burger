import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
   
    userInfo:null,
    error: null,
    loading: false,
    authRedirectPath: '/'
};
console.log(initialState)

const authStart = ( state, action ) => {
    return updateObject( state, { error: null, loading: true } );
};
const authReset = ( state, action ) => {
    return updateObject( state, { error:null } );
};

const authSuccess = (state, action) => {
    
    return updateObject( state, { 
       
        userInfo:action.payLoad,
        error: null,
        loading: false
     } );
};

const authFail = (state, action) => {
    return updateObject( state, {
        error: action.error,
        loading: false
    });
};

const authLogout = (state, action) => {
    return updateObject(state, { ...initialState });
};

const setAuthRedirectPath = (state, action) => {
    return updateObject(state, { authRedirectPath: action.path })
}

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.AUTH_START: return authStart(state, action);
        case actionTypes.AUTH_RESET: return authReset(state, action);
        case actionTypes.AUTH_SUCCESS: return authSuccess(state, action);
        case actionTypes.AUTH_FAIL: return authFail(state, action);
        case actionTypes.AUTH_LOGOUT: return authLogout(state, action);
        case actionTypes.SET_AUTH_REDIRECT_PATH: return setAuthRedirectPath(state,action);
        default:
            return state;
    }
};

export default reducer;