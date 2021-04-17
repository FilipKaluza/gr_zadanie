import * as actionTypes from "../actions/actionTypes";

const initialState = {
    shelters: null,
    loading: true,
    error: null,
}

const fetchSheltersReducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.FETCH_SHELTERS_SUCCESS:
            return {
                ...state,
                shelters: action.shelters,
                loading: false,
                error: null
            }
        case actionTypes.FETCH_SHELTERS_FAILED:
            return {
                ...state,
                error: action.error,
                loading: false
            }
        default:
            return state
    }
}

export default fetchSheltersReducer;