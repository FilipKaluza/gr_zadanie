import React, { useEffect, useState, useReducer } from 'react';
import axios from "axios";

// import child components
import ContributionTypeHeader from "./mainHeader/mainHeader";
import ContributionType from "./contributionType/contributionType";
import SpecificShelterInput from "./specificShelterInput/specificShelterInput";
import ContributionValue from "./ContributionValue/ContributionValue";

// import Redux actions
import * as actions from "../store/actions/index";

import { useDispatch } from "react-redux";

// import css
import "./Contribution.css";

const chooseTypeOfContribution = (state, action) => {
    switch(action.type) {
        case "SPECIFIC":
            return { specific: true, wholeOrg: false}
        case "WHOLE":
            return { specific: false, wholeOrg: true}
        default:
            throw new Error("This never happen")
    }
}

const ChooseContribution = (props) => {

    const [ shelters, setShelters ] = useState()
    const [ typeOfContribution, dispatchTypeOfContribution  ] = useReducer( chooseTypeOfContribution, { specific: true, wholeOrg: false } )

    const dispatch = useDispatch();

    useEffect(() => {
        axios.get(`https://frontend-assignment-api.goodrequest.com/api/v1/shelters`)
            .then(res => {
                let sheltersAray = [];
                for (let key in res.data) {
                    sheltersAray.push(...res.data[key])
                }
                setShelters(sheltersAray)
            })
            .catch(error => {
                console.log(error)
            })
    }, [])

    const selectShelterHandler = (event) => {
        const indexOfSHelter = (shelters.findIndex(shelter => shelter.name === event.target.value))
        dispatch(actions.set_shelter_id({ID: indexOfSHelter}))
    };


    const selectSpecificContribution = () => {
        dispatchTypeOfContribution( {type: "SPECIFIC"} )
    };

    const selectWholeOrgContribution = () => {
        dispatchTypeOfContribution( {type: "WHOLE"} )
    };


    return(
        <div className="ChooseContribution">
            <ContributionTypeHeader />
            <ContributionType 
                selectSpecificContribution={selectSpecificContribution} 
                selectWholeOrgContribution={selectWholeOrgContribution}
                whole={typeOfContribution.wholeOrg} />
            <SpecificShelterInput specific={typeOfContribution.specific} shelters={shelters} changed={(e) => selectShelterHandler(e) }  />
            <ContributionValue />
        </div>
    );
}

export default ChooseContribution;
