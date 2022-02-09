import * as actionTypes from '../actions/actionTypes';

const initialState = {
    token: null,
}

const reducer = (state = initialState, action: any) => {
    switch(action.type){
        case actionTypes.SETTOKEN:
            return {...state, token: action.value};
        default:
             return state
    }
    return state
};

export default reducer;