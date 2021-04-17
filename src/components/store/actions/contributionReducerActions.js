import * as actionTypes from "./actionTypes";

export const select_contribute_with_button = (value) => {
    return {
        type: actionTypes.SELECT_WITH_BUTTON,
        value: value
    }
}

export const select_by_user = (value) => {
    return {
        type: actionTypes.SELECTED_BY_USER,
        value: value,
        touched: true
    }
}

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

export const contribute_whole_org = () => {
    return {
        type: actionTypes.CONTRIBUTE_WWHOLE_ORG,
        specific: false,
        wholeOrg: true,
    }
}

export const contribute_specific_shelter = () => {
    return {
        type: actionTypes.CONTRIBUTE_SPECIFIC_SHELTER,
        specific: true,
        wholeOrg: false,
    }
}

export const set_shelter = (Id, selectedShelter) => {
    return {
        type: actionTypes.SET_SHELTER,
        Id: Id,
        selectedShelter: selectedShelter
    }
}