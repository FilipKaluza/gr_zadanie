import React, { useEffect, useState, useReducer } from 'react';
import axios from "axios";

import { useSelector } from "react-redux";

// import child components
import ContributionTypeHeader from "./mainHeader/mainHeader";
import ContributionType from "./contributionType/contributionType";
import SpecificShelterInput from "./specificShelterInput/specificShelterInput";
import ContributionValue from "./ContributionValue/ContributionValue";
import Button from "../UI/button/button";

// import Redux actions
import * as actions from "../store/actions/index";

import { useDispatch } from "react-redux";


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
    const [ typeOfContribution, dispatchTypeOfContribution  ] = useReducer( chooseTypeOfContribution, { specific: false, wholeOrg: true } )
    const value = useSelector( state => state.contributionReducer.value );
    const specificShelterId = useSelector( state => state.shelterIdReducer.shelter_id )

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
        let indexOfSHelter = (shelters.findIndex(shelter => shelter.name === event.target.value))
        if (indexOfSHelter === -1) {
            indexOfSHelter = undefined;
        } // this is helper function, if user have to choose specific shler, he choose and after that he cancel his choice, shelter_id become -1 insteal undefined, which cause Pokračovať Enabled, small bug fix
        dispatch(actions.set_shelter_id(indexOfSHelter, event.target.value ))
    };


    const selectSpecificContribution = () => {
        dispatchTypeOfContribution( {type: "SPECIFIC"} )
    };

    const selectWholeOrgContribution = () => {
        dispatchTypeOfContribution( {type: "WHOLE"} )
    };

    let buttonProperties = {
        className: "Disabled",
        disabled: true,
        value: "Pokračovať"
    }

    if (typeOfContribution.specific && value && specificShelterId !== -1) {
        buttonProperties = {
            ...buttonProperties,
            className: "Enabled",
            disabled: false
        }
    }

    if (typeOfContribution.wholeOrg && value ) {
        buttonProperties = {
            ...buttonProperties,
            className: "Enabled",
            disabled: false
        }
    }


    return(
        <div className="ChooseContribution">
            <ContributionTypeHeader />
            <ContributionType 
                selectSpecificContribution={selectSpecificContribution} 
                selectWholeOrgContribution={selectWholeOrgContribution}
                whole={typeOfContribution.wholeOrg} />
            <SpecificShelterInput specific={typeOfContribution.specific} shelters={shelters} changed={(e) => selectShelterHandler(e) }  />
            <ContributionValue />
            <div style={{ width: "100%", display: "flex", justifyContent: "flex-end", margin: "72px 0 0 0" }} >
                <Button url="/contactdata" buttonProperties={buttonProperties} />
            </div>
        </div>
    );
}

export default ChooseContribution;
