import axios from 'axios';
import { dataBaseUrl } from '../../Config/urls';
import * as actionTypes from './actionTypes';

export const logout = () => {
    return (dispatch: any) => {
        localStorage.removeItem('@pandapayToken');
        dispatch(setToken(null))
    }
}

export const fetchData = () => {
    const userEmail = localStorage.getItem('@pandapayEmail');
    return(dispatch: any) => {
        dispatch(setLoading(true))
        axios.get(dataBaseUrl + 'users.json')
            .then(r => {
                const data = r.data;
                let userData = {};
                Object.keys(data).map(key => {
                    if(data[key].email === userEmail){
                        userData = {...data[key], id: key};
                        dispatch(setUserData(userData));
                        dispatch(setLoading(false))
                    }
                })
            })
            .catch(err => {
                dispatch(setLoading(false))
            } )
    }
}

export const getUsersList = () => {
    return(dispatch: any) => {
        dispatch(setLoading(true))
        axios.get(dataBaseUrl + 'users.json')
            .then(r => {
                const data = r.data;
                let arr: any[] = []
                Object.keys(data).map(key => {
                    let listItem = {...data[key], id: key};
                    arr.push(listItem);
                });
                dispatch(setLoading(false));
                dispatch(setUsersList(arr));
            })
            .catch(err => {
                console.log(err);
                dispatch(setLoading(false))
            })
    }
};

export const Transfer = (userData: any, recieverData: any, data: any) => {
    return (dispatch: any) => {
        if(userData.email === recieverData.email){
            dispatch(setTransferError('Cant send money to your self'))
        }else{
            let SDB = 0;
            Object.keys(userData).map(i => {
                if(i === data.SendingCurrencyName){
                    SDB = userData[i]
                }
            });

            if(data.SendingCurrencyName === 'usdBalance'){
                const bal = SDB - data.amountSending;
                console.log('usdBalance')
                if(bal < 0){
                    dispatch(setTransferError('Insufficient balance'))
                }else{
                    console.log({...userData, usdBalance: SDB - data.amountSending})
                }
            }else if(data.SendingCurrencyName === 'eurBalance'){
                const bal = SDB - data.amountSending;
                console.log({...userData, eurBalance: SDB - data.amountSending})
                // console.log('eurBalance')
                // if(bal < 0){
                //     dispatch(setTransferError('Insufficient balance'))
                // }else{
                //     console.log({...userData, eurBalance: SDB - data.amountSending})
                // }
            }else{
                const bal = SDB - data.amountSending;
                console.log({...userData, ngnBalance: SDB - data.amountSending})
                // console.log('ngnBalance')
                // if(bal < 0){
                //     dispatch(setTransferError('Insufficient balance'))
                // }else{
                //     console.log({...userData, ngnBalance: SDB - data.amountSending})
                // }
            }
        }
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

const setUserData = (data: any) => {
    return{
        type: actionTypes.SETUSERDATA,
        value: data
    }
}

const setUsersList = (list: any) => {
    return{
        type: actionTypes.SETUSERSLIST,
        value: list
    }
}

const setTransferError = (e: any) => {
    return{
        type: actionTypes.TRANSACTIONERROR,
        value: e
    }
}