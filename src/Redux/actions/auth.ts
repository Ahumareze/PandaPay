import * as actionTypes from './actionTypes';

export const init = () => {
    const localToken = localStorage.getItem('@pandapayToken');
    return (dispatch: any) => {
        console.log('reached')
        if(localToken){
            dispatch(setToken(localToken))
        }else{
            dispatch(setToken('ball'))
        }
    }
}

const setToken = (e: any) => {
    return{
        type: actionTypes.SETTOKEN,
        value:e
    }
}