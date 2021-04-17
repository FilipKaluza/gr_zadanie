import * as actionTypes from "../actions/actionTypes";

const initialState = {
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

const contactDataReducer = (state = initialState, action) => {
    switch(action.type) {
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

export default contactDataReducer;