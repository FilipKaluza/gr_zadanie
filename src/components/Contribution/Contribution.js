import React, { useEffect, useState, useReducer, useMemo, useCallback } from 'react';
import axios from "axios";

import { useSelector } from "react-redux";

// import child components
import NavProgress from "../shared/navProgress/navProgress";
import MainHeader from "./mainHeader/mainHeader";
import ContributionType from "./contributionType/contributionType";
import SpecificShelterHeader from "./specificShelterHeader/specificShelterHeader";
import SelectSpecificShelterInput from "./selectSpecificShelterInput/selectSpecificShelterInput";
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
    const value = useSelector( state => state.contributionReducer.value )
    const specificShelter = useSelector( state => state.shelterReducer )

    const dispatch = useDispatch();

    useEffect(() => {
        axios.get(`https://frontend-assignment-api.goodrequest.com/api/v1/shelters`)
            .then(res => {
                let sheltersAray = [];
                for ( let key in res.data) {
                    sheltersAray.push(...res.data[key]) 
                }
                setShelters(sheltersAray)
            })
            .catch(error => {
                console.log(error)
            })
    }, [])

    const selectShelterHandler = useCallback((event) => {
        let indexOfSHelter = (shelters.findIndex(shelter => shelter.name === event.label))
        if (indexOfSHelter === -1) {
            indexOfSHelter = undefined;
        } // this is helper function, if user have to choose specific shler, he choose and after that he cancel his choice, shelter_id become -1 insteal undefined, which cause Pokračovať Enabled, small bug fix
        dispatch(actions.set_shelter(indexOfSHelter, event.label ))
    }, [shelters, dispatch]);


    const selectSpecificContribution = () => {
        dispatchTypeOfContribution( {type: "SPECIFIC"} )
    };

    const selectWholeOrgContribution = () => {
        dispatchTypeOfContribution( {type: "WHOLE"} )
    };

    let buttonProperties = useMemo(() => {
        let buttonProperties = {
            className: "Disabled",
            disabled: true,
            value: "Pokračovať"
        }
    
        if (typeOfContribution.specific && specificShelter.shelter_id && value) {
            buttonProperties = {
                ...buttonProperties,
                className: "Enabled",
                disabled: false
            }
        }
    
        if (typeOfContribution.wholeOrg && value) {
            buttonProperties = {
                ...buttonProperties,
                className: "Enabled",
                disabled: false
            }
        }
        return buttonProperties
    }, [typeOfContribution, specificShelter.shelter_id, value]) // this hooks help me avoid re-rendering buttonn when user just changing value

    const contributionType = useMemo(() => {
        return <ContributionType 
        selectSpecificContribution={selectSpecificContribution} 
        selectWholeOrgContribution={selectWholeOrgContribution}
        whole={typeOfContribution.wholeOrg} />
    }, [typeOfContribution])

    const selectSpecificShelterInput = useMemo(() => {
        return <SelectSpecificShelterInput helters={shelters} changed={(e) => selectShelterHandler(e)} />
    }, [ shelters, selectShelterHandler])

    return(
        <div className="ChooseContribution">
            <NavProgress />
            <MainHeader />
            {contributionType}
            <SpecificShelterHeader specific={typeOfContribution.specific} />
            {selectSpecificShelterInput}
            <ContributionValue />
            <div style={{ width: "100%", display: "flex", justifyContent: "flex-end", margin: "72px 0 0 0" }} >
                <Button url="/contactdata" buttonProperties={buttonProperties} />
            </div>     
        </div>
    );
}

export default ChooseContribution;
