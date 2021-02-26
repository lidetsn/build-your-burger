import axios from 'axios';

import * as actionTypes from './actionTypes';

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    };
};


export const authReset = () => {
    return {
        type: actionTypes.AUTH_RESET
    };
};

export const authSuccess = (data) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        payLoad:data
     
    };
};

export const authFail = (message) => {
    console.log(message)
    return {
        type: actionTypes.AUTH_FAIL,
        error: message
    };
};

export const logout = () => {
    localStorage.removeItem('userInfo');
    return {
        type: actionTypes.AUTH_LOGOUT
    };
};

export const checkAuthTimeout = (expirationTime) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(logout());
        }, expirationTime * 1000);
    };
};

export const auth = (email, password) => {

    return dispatch => {
        dispatch(authStart());
        const authData = {
                    email: email,
                    password: password,
                    returnSecureToken: true
        };
       
        axios.post("/api/user/login", authData)
            .then(response => {
                console.log(response);
                localStorage.setItem('userInfo', JSON.stringify(response.data));

                
                dispatch(authSuccess(response.data));
                // dispatch(checkAuthTimeout(response.data.expiresIn));
            })
            .catch(err => {
                console.log(err.response)
                    if(err.response.status===500)
                    dispatch(authFail(err.response.statusText)); 
                    else   
                dispatch(authFail(err.response.data.message));//for customized error set from server side
              //  dispatch(authFail(err.response.statusText));

            });
    };
};

export const setAuthRedirectPath = (path) => {
    return {
        type: actionTypes.SET_AUTH_REDIRECT_PATH,
        path: path
    };
};

export const authCheckState = () => {
    return dispatch => {
        const token = localStorage.getItem('token');
        if (!token) {
            dispatch(logout());
        } else {
            const expirationDate = new Date(localStorage.getItem('expirationDate'));
            if (expirationDate <= new Date()) {
                dispatch(logout());
            } else {
                const userId = localStorage.getItem('userId');
                dispatch(authSuccess(token, userId));
                dispatch(checkAuthTimeout((expirationDate.getTime() - new Date().getTime()) / 1000 ));
            }   
        }
    };
};

export const registerUser=(data)=>{

    return dispatch=>{
             dispatch(authStart());
              axios.post("/api/user/register",data).then(response=>{
                  console.log(response)
                  localStorage.setItem('userInfo', JSON.stringify(response.data));
                  dispatch(authSuccess(response.data));

               }).catch(err=>{
                dispatch(authFail(err.response.data.message));
                   })
    
         
     }
}

