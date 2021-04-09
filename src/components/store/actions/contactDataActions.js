import * as actionTypes from "./actionTypes";

export const update_gen_input = (updatedInput) => {
    return {
        type: actionTypes.UPDATE_GEN_INPUT,
        updatedInput: updatedInput
    }
}

export const update_phone_input = (updatedInput) => {
    return {
        type: actionTypes.UPDATE_PHONE_INPUT,
        updatedInput: updatedInput
    }
}