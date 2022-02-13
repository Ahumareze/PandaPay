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
    const userEmail = localStorage.getItem('@pandapayEmail');
    return(dispatch: any) => {
        dispatch(setLoading(true))
        axios.get(dataBaseUrl + 'users.json')
            .then(r => {
                const data = r.data;
                let arr: any[] = []
                Object.keys(data).map(key => {
                    if(data[key].email !== userEmail){
                        let listItem = {...data[key], id: key};
                        arr.push(listItem);
                    }
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
        
        let SDB = 0;
        Object.keys(userData).map(i => {
            if(i === data.SendingCurrencyName){
                SDB = userData[i]
            }
        });

        let newRecieverData = {...recieverData, usdBalance: recieverData.usdBalance + data.amountRecieving};
        if(data.RecievingCurrencyName === 'eurBalance'){
            newRecieverData = {...recieverData, eurBalance: recieverData.eurBalance + data.amountRecieving};
        }else if(data.RecievingCurrencyName === 'ngnBalance'){
            newRecieverData = {...recieverData, ngnBalance: recieverData.ngnBalance + data.amountRecieving};
        }

        if(data.SendingCurrencyName === 'usdBalance'){
            const bal = SDB - data.amountSending;
            if(bal < 0){
                dispatch(setTransferError('Insufficient balance'))
            }else{
                dispatch(PostData({...userData, usdBalance: SDB - data.amountSending}, newRecieverData, data ))
            }
        }else if(data.SendingCurrencyName === 'eurBalance'){
            const bal = SDB - data.amountSending;
            if(bal < 0){
                dispatch(setTransferError('Insufficient balance'));
            }else{
                dispatch(PostData({...userData, eurBalance: SDB - data.amountSending}, newRecieverData, data))
            }
        }else{
            const bal = SDB - data.amountSending;
            if(bal < 0){
                dispatch(setTransferError('Insufficient balance'));
            }else{
                dispatch(PostData({...userData, ngnBalance: SDB - data.amountSending}, newRecieverData, data))
            }
        }
        
    }
};

const PostData = (userData: any, recieverData: any, mainData: any) => {
    return (dispatch:any) => {
        const num = new Date().valueOf();
        const date = new Date();
        const newDate = date.toDateString();

        const debitAlert = {
            sender: userData.username,
            reciever: recieverData.username,
            value: mainData.amountSending,
            currency: mainData.SendingCurrencyAbb,
            date: newDate,
            debit: true
        }

        const creditAlert = {
            sender: userData.username,
            reciever: recieverData.username,
            value: mainData.amountRecieving,
            currency: mainData.RecieverCurrencyAbb,
            date: newDate,
            debit: false
        }

        const transactions = {...userData.transactions};
        transactions[num] = debitAlert;
        const senderData = {
            ...userData,
            transactions
        }

        dispatch(setLoading(true))
        axios.put(dataBaseUrl + 'users/' + userData.id + '.json', senderData)
            .then(r => {
                dispatch(PostRecieverData(recieverData, creditAlert ))
            })
            .catch(e => {
                console.log(e.response);
                dispatch(setLoading(false));
                dispatch(setTransferError('Network error'))
            })
    }
}

const PostRecieverData = (data: any, creditAlert: any) => {
    return(dispatch: any) => {
        const num = new Date().valueOf();
        const transactions = {...data.transactions};
        transactions[num] = creditAlert;
        const newData = {
            ...data,
            transactions
        }
        axios.put(dataBaseUrl + 'users/' + data.id + '.json', newData)
            .then(r => {
                console.log(r.data)
                dispatch(setLoading(false));
                dispatch(setTransferError(null));
                dispatch(setSent(true))
            })
            .catch(e => {
                console.log(e.response)
                dispatch(setLoading(false))
            })
    }
};

export const setSent = (e: any) => {
    return{
        type: actionTypes.SENT,
        value: e
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