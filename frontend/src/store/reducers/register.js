import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    isRegistered:false,
    error: null,
    loading: false,
   registrationRedirectPath: '/login'
};

const registrationStart = ( state, action ) => {
    return updateObject( state, { error: null, loading: true } );
};

const registrationSuccess = (state, action) => {
    return updateObject( state, { 
        isRegistered:action.isRegistered,
        // userId: action.userId,
        error: null,
        loading: false
     } );
};

const registrationFail = (state, action) => {
    return updateObject( state, {
        error: action.error,
        loading: false
    });
};



const setRegistrationRedirectPath = (state, action) => {
    return updateObject(state, { authRedirectPath: action.path })
}

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.REGISTRATION_START: return registrationStart(state, action);
        case actionTypes.REGISTRATION_SUCCESS: return registrationSuccess(state, action);
        case actionTypes.REGISTRATION_FAIL: return registrationFail(state, action);
        case actionTypes.SET_REGISTRATION_REDIRECT_PATH: return setRegistrationRedirectPath(state,action);
        default:
            return state;
    }
};

export default reducer;