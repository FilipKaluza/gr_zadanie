import * as actions from "./actionTypes";

export const set_shelter_id = (Id, name) => {
    return {
        type: actions.SET_SHELTER_ID,
        Id: Id,
        name: name
    }
}