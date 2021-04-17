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
    return dispatch => {
        axios.get(`https://frontend-assignment-api.goodrequest.com/api/v1/shelters`)
        .then(res => {
            const shelters = res.data["shelters"]
            dispatch(fetchSheltersSuccess(shelters))
        })
        .catch(error => {
            dispatch(fetchSheltersFailed(error))
        })
    };
};