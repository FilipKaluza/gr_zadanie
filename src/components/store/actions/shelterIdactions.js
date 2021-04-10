import * as actionTypes from "./actionTypes";

export const set_shelter = (Id, selectedShelter) => {
    return {
        type: actionTypes.SET_SHELTER_ID,
        Id: Id,
        selectedShelter: selectedShelter
    }
}