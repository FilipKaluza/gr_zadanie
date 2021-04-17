import * as actionTypes from "../actions/actionTypes";

const initialState = {
    value: 50,
    customInputTouched: false,
    wholeOrg: true,
    specific: false,
    shelter_id: null,
    selectedShelter: null,
    generalInputs: {
        name: {
            value: "",
            valid: false,
            touched: false
        },
        surname: {
            value: "",
            valid: false,
            touched: false
        },
        email: {
            value: "",
            valid: false,
            touched: false
        }
    },
    phone: {
        value: "",
        validation: {
            phone: true,
            maxLength: 13,
            minLength: 10,
        },
        valid: false,
        touched: false
    }
}

const contributionReducer = (state = initialState, action ) => {
    switch(action.type) {
        case actionTypes.CONTRIBUTE_WWHOLE_ORG:
            return {
                ...state,
                wholeOrg: action.wholeOrg,
                specific: action.specific,
            }
        case actionTypes.CONTRIBUTE_SPECIFIC_SHELTER:
            return {
                ...state,
                wholeOrg: action.wholeOrg,
                specific: action.specific,
            }
        case actionTypes.SET_SHELTER:
            return {
                ...state,
                shelter_id: action.Id,
                selectedShelter: action.selectedShelter,
                wholeOrg: false,
                specific: true
            }
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
        case actionTypes.UPDATE_NAME:
            return {
                ...state,
                generalInputs: {
                    ...state.generalInputs,
                    name: {
                        value: action.value,
                        valid: action.valid,
                        touched: true
                    }
                }
            }
        case actionTypes.UPDATE_SURNAME:
            return {
                ...state,
                generalInputs: {
                    ...state.generalInputs,
                    surname: {
                        value: action.value,
                        valid: action.valid,
                        touched: true
                    }
                }
            }
        case actionTypes.UPDATE_EMAIL:
            return {
                ...state,
                generalInputs: {
                    ...state.generalInputs,
                    email: {
                        value: action.value,
                        valid: action.valid,
                        touched: true
                    }
                }
            }
        case actionTypes.UPDATE_PHONE_INPUT:
            return {
                ...state,
                phone: {
                    value: action.value,
                    valid: action.valid,
                    touched: true
                }
            }
        default:
            return state
    }
}

export default contributionReducer;
