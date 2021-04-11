import * as actionTypes from "./actionTypes";

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