import * as actionTypes from "../actions/actionTypes";

const initialState = {
    value: 50,
    customInputTouched: false
}

const amountOfContributionReducer = (state = initialState, action ) => {
    switch(action.type) {
        case actionTypes.SELECT_WITH_BUTTON:
            return {
                ...state,
                value: action.value,
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
