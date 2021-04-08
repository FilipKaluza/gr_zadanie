import * as actionTypes from "../actions/actionTypes";

const initialState = {
    value: 50
}

const contributionReducer = (state = initialState, action ) => {
    switch(action.type) {
        case actionTypes.SELECT_5:
            return {
                ...state,
                value: 5
            }
        case actionTypes.SELECT_10:
            return {
                ...state,
                value: 10
            }
        case actionTypes.SELECT_20:
            return {
                ...state,
                value: 20
            }
        case actionTypes.SELECT_30:
            return {
                ...state,
                value: 30
            }
        case actionTypes.SELECT_50:
            return {
                ...state,
                value: 50
            }
        case actionTypes.SELECT_100:
            return {
                ...state,
                value: 100
            }
        case actionTypes.SELECTED_BY_USER:
            return {
                ...state,
                value: action.value
            }
        default:
            return state
    }
}

export default contributionReducer;
