import * as actionTypes from "../actions/actionTypes";

const initialState = {
    generalInputs: {
        name: {
            elementType: "input",
            elementConfig: {
                type: "text",
                placeholder: "Zadajte Vaše meno",
                label: "Meno"
            },
            value: "",
            validation: {
                required: true,
                minLength: 2,
                maxLength: 20
            },
            valid: false,
            touched: false
        },
        surname: {
            elementType: "input",
            elementConfig: {
                type: "text",
                placeholder: "Zadajte Vaše priezvisko",
                label: "Vaše priezvisko"
            },
            value: "",
            validation: {
                required: true,
                minLength: 2,
                maxLength: 30
            },
            valid: false,
            touched: false
        },
        email: {
            elementType: "input",
            elementConfig: {
                type: "email",
                placeholder: "Zadajte Váš e-mail",
                label: "E-mailová adresa"
            },
            value: "",
            validation: {
                required: true,
                email: true
            },
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
        case actionTypes.UPDATE_GEN_INPUT:
            return {
                ...state,
                generalInputs: action.updatedInput
            }
        case actionTypes.UPDATE_PHONE_INPUT:
            return {
                ...state,
                phone: action.updatedInput
            }
        default:
            return state
    }
}

export default contactDataReducer;