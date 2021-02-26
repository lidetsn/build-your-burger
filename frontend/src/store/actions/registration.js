import axios from 'axios';

import * as actionTypes from './actionTypes';

export const registrationStart = () => {
    return {
        type: actionTypes.REGISTRATION_START
    };
};

export const registrationSuccess = (isRegistered) => {
    return {
        type: actionTypes.REGISTRATION_SUCCESS,
        isRegistered,
       
    };
};

export const registrationFail = (error) => {
    return {
        type: actionTypes.REGISTRATION_FAIL,
        error: error
    };
};

export const setRegistrationRedirectPath = (path) => {
    return {
        type: actionTypes.SET_REGISTRATION_REDIRECT_PATH,
        path: path
    };
};


export const registerUser=(data)=>{
    return dispatch=>{
              axios.post("/api/user/register",data).then(response=>{
                  console.log(response)
                dispatch(registrationSuccess(response.data.isRegistered))  

               }).catch(err=>{
                dispatch(registrationFail(err.response.data.error));
                   })
    
         
     }
}