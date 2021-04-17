import axios from "axios";
import * as actionTypes from "./actionTypes";

export const fetchSheltersSuccess = (shelters) =>  {
    return {
        type: actionTypes.FETCH_SHELTERS_SUCCESS,
        shelters: shelters
    }
}

export const fetchSheltersFailed = (error) => {
    return {
        type: actionTypes.FETCH_SHELTERS_FAILED,
        error: error
    }
}

export const fetchShelters = () => {
    return async dispatch => {
        try {
            const response = await axios.get(`https://frontend-assignment-api.goodrequest.com/api/v1/shelters`)
            const shelters = await response.data.shelters
            dispatch(fetchSheltersSuccess(shelters))
        } catch(err) {
            dispatch(fetchSheltersFailed("Nepodarilo sa načítať útulky"))
        }
        
    };
}; 
