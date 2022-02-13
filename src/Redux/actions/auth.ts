import axios from 'axios';
import * as actionTypes from './actionTypes';
import { signupUrl, loginUrl, dataBaseUrl } from '../../Config/urls';

export const init = () => {
    const localToken = localStorage.getItem('@pandapayToken');
    return (dispatch: any) => {
        if(localToken){
            dispatch(setToken(localToken))
        }else{
            dispatch(setToken(null))
        }
    }
}

export const AuthSignup = (e: any) => {
    return (dispatch: any) => {
        dispatch(setLoading(true));
        const newData = {
            email: e.email,
            password: e.password,
            returnSecureToken: true
        }
        axios.post(signupUrl, newData)
            .then(r => {
                dispatch(createUserData(e.username, e.email, e.phone, r.data.idToken));
                dispatch(setErrorMessage(null))
            })
            .catch(err => {
                dispatch(setLoading(false))
                let errorM = 'Network Error'
                if(err.response){
                    errorM = err.response.data.error.message
                }
                dispatch(setErrorMessage(errorM));
            })
    }
};

export const AuthLogin = (e: any) => {
    return (dispatch: any) => {
        dispatch(setLoading(true));
        const newData = {
            email: e.email,
            password: e.password,
            returnSecureToken: true
        };
        axios.post(loginUrl, newData)
            .then(r => {
                dispatch(setLoading(false));
                dispatch(setToken(r.data.idToken));
                dispatch(setErrorMessage(null))
                localStorage.setItem('@pandapayToken', r.data.idToken);
                localStorage.setItem('@pandapayEmail', r.data.email)
            })
            .catch(err => {
                dispatch(setLoading(false))
                let errorM = 'Network Error'
                if(err.response){
                    errorM = err.response.data.error.message
                }
                dispatch(setErrorMessage(errorM));
            })
    }
};

export const createUserData = (username: any, email: any, phone: any, idToken: any) => {
    return (dispatch: any) => {
        const data = {
            username: username,
            email: email,
            phone: phone,
            usdBalance: 1000,
            eurBalance: 0,
            ngnBalance: 0
        };
        axios.post(dataBaseUrl + 'users.json', data)
            .then(r => {
                dispatch(setLoading(false));
                dispatch(setToken(idToken));
                dispatch(setErrorMessage(null));
                localStorage.setItem('@pandapayToken',idToken);
                localStorage.setItem('@pandapayEmail', email)
            })
            .catch(err => {
                dispatch(setLoading(false));
            })
    }
}

const setToken = (e: any) => {
    return{
        type: actionTypes.SETTOKEN,
        value:e
    }
}

const setLoading = (e: boolean) => {
    return{
        type: actionTypes.LOADING,
        value: e
    }
}

const setErrorMessage = (e: any) => {
    return{
        type: actionTypes.ERRORMESSAGE,
        value: e
    }
}