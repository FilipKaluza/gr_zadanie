import * as actionsTypes from "../actions/actionTypes";

const initialState = {
    wholeOrg: true,
    specific: false,
    shelter_id: null,
    selectedShelter: null,
};

const typeOfContributionReducer = (state = initialState, action) => {
    switch(action.type) {
        case actionsTypes.CONTRIBUTE_WWHOLE_ORG:
            return {
                ...state,
                wholeOrg: action.wholeOrg,
                specific: action.specific,
            }
        case actionsTypes.CONTRIBUTE_SPECIFIC_SHELTER:
            return {
                ...state,
                wholeOrg: action.wholeOrg,
                specific: action.specific,
            }
        case actionsTypes.SET_SHELTER:
            return {
                ...state,
                shelter_id: action.Id,
                selectedShelter: action.selectedShelter,
                wholeOrg: false,
                specific: true
            }
        default:
            return state
    }

}

export default typeOfContributionReducer;