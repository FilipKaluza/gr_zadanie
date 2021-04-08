import * as actionsTypes from "../actions/actionTypes";

const initialState = {
    shelter_id: null
};

const shelterIdReducer = (state = initialState, actions) => {
    if (actionsTypes.SET_SHELTER_ID === "SET_SHELTER_ID" ) {
        return {
            ...state,
            shelter_id: actions.ID
        }
    } 
}

export default shelterIdReducer;