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