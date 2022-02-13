import * as actionTypes from '../actions/actionTypes';

const initialState = {
    token: null,
    loading: false,
    errorMessage: null,
    userData: null,
    usersList: null,
    TransactionError: null,
    sent: false
}

const reducer = (state = initialState, action: any) => {
    switch(action.type){
        case actionTypes.SETTOKEN:
            return {...state, token: action.value};
        case actionTypes.LOADING:
            return {...state, loading: action.value};
        case actionTypes.ERRORMESSAGE:
            return{...state, errorMessage: action.value};
        case actionTypes.SETUSERDATA:
            return{...state, userData: action.value};
        case actionTypes.SETUSERSLIST:
            return{...state, usersList: action.value};
        case actionTypes.TRANSACTIONERROR:
            return{...state, TransactionError: action.value};
        case actionTypes.SENT:
            return{...state, sent: action.value}
    }
    return state
};

export default reducer;