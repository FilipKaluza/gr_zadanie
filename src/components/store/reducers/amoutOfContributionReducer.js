import * as actionTypes from "../actions/actionTypes";

const initialState = {
    value: 50,
    customInputTouched: false
}

const amountOfContributionReducer = (state = initialState, action ) => {
    switch(action.type) {
        case actionTypes.SELECT_5:
            return {
                ...state,
                value: 5,
                customInputTouched: false
            }
        case actionTypes.SELECT_10:
            return {
                ...state,
                value: 10,
                customInputTouched: false
            }
        case actionTypes.SELECT_20:
            return {
                ...state,
                value: 20,
                customInputTouched: false
            }
        case actionTypes.SELECT_30:
            return {
                ...state,
                value: 30,
                customInputTouched: false
            }
        case actionTypes.SELECT_50:
            return {
                ...state,
                value: 50,
                customInputTouched: false
            }
        case actionTypes.SELECT_100:
            return {
                ...state,
                value: 100,
                customInputTouched: false
            }
        case actionTypes.SELECTED_BY_USER:
            return {
                ...state,
                value: action.value,
                customInputTouched: true
            }
        default:
            return state
    }
}

export default amountOfContributionReducer;
