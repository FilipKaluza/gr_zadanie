import * as actionTypes from "./actionTypes";

export const select_5 = () => {
    return {
        type: actionTypes.SELECT_5,
        value: 5
    };
};

export const select_10 = () => {
    return {
        type: actionTypes.SELECT_10,
        value: 10
    };
};

export const select_20 = () => {
    return {
        type: actionTypes.SELECT_20,
        value: 20
    };
};

export const select_30 = () => {
    return {
        type: actionTypes.SELECT_30,
        value: 30
    };
};

export const select_50 = () => {
    return {
        type: actionTypes.SELECT_50,
        value: 50
    };
};

export const select_100 = () => {
    return {
        type: actionTypes.SELECT_100,
        value: 100
    };
};

export const select_by_user = (value) => {
    return {
        type: actionTypes.SELECTED_BY_USER,
        value: value,
        touched: true
    }
}