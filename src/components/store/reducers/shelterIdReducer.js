import * as actionsTypes from "../actions/actionTypes";

const initialState = {
    shelter_id: null,
    selectedShelter: null,
};

const shelterReducer = (state = initialState, actions) => {
    if (actionsTypes.SET_SHELTER_ID === "SET_SHELTER_ID" ) {
        return {
            ...state,
            shelter_id: actions.Id,
            selectedShelter: actions.selectedShelter
        }
    } 
}

export default shelterReducer;