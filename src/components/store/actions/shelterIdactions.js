import * as actions from "./actionTypes";

export const set_shelter_id = (ID) => {
    return {
        type: actions.SET_SHELTER_ID,
        ID: ID
    }
}