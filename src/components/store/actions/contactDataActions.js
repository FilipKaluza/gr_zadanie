import * as actionTypes from "./actionTypes";

export const update_input = (inputIdentifier, value, valid) => {
    switch(inputIdentifier) {
        case "name": {
            return {
                type: actionTypes.UPDATE_NAME,
                value: value,
                valid: valid    
            }
        }
        case "surname": {
            return {
                type: actionTypes.UPDATE_SURNAME,
                value: value,
                valid: valid    
            }
        }
        case "email": {
            return {
                type: actionTypes.UPDATE_EMAIL,
                value: value,
                valid: valid    
            }
        }
        case "phone": {
            return {
                type: actionTypes.UPDATE_PHONE_INPUT,
                value: value,
                valid: valid
            }
        }
        default:
            return null;
    }
}

