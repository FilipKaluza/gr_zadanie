import React, { useEffect, useState, useMemo, useCallback } from 'react';
import axios from "axios";

import { useSelector, useDispatch } from "react-redux";
import * as actions from "../store/actions/index";

// import child components
import NavProgress from "../shared/navProgress/navProgress";
import MainHeader from "../shared/mainHeader/mainHeader";
import ContributionType from "./ContributionType/ContributionType";
import SelectSpecificShelterInput from "./SelectSpecificShelterInput/SelectSpecificShelterInput";
import ContributionValue from "./ContributionValue/ContributionValue";
import Button from "../UI/button/button";

const Contribution = (props) => {

    const [ shelters, setShelters ] = useState()
    const [ fetchErrorShelter, setFetchErrorShelters ] = useState(null)
    const amountOfContribution = useSelector( state => state.amountOfContributionReducer.value )
    const typeOfContribution = useSelector(state => state.typeOfContributionReducer )

    const dispatch = useDispatch();

    useEffect(() => {
        axios.get(`https://frontend-assignment-api.goodrequest.com/api/v1/shelters`)
            .then(res => {
                const shelters = res.data["shelters"]
                setShelters(shelters)
            })
            .catch(error => {
                setFetchErrorShelters("Nepodarilo sa načítať konkrétne útulky")
            })
    }, [])


    let buttonProperties = {
        className: "Disabled",
        value: "Pokračovať"
    }

    let continueCondition = typeOfContribution.specific ? typeOfContribution.shelter_id && amountOfContribution : amountOfContribution
    if (continueCondition) {
        continueCondition = true
        buttonProperties = {
            ...buttonProperties,
            className: "Enabled",
        }
    }

    if (continueCondition) {
        continueCondition = true
        buttonProperties = {
            ...buttonProperties,
            className: "Enabled",
        }
    }

    const contributeSpecificShelter = useCallback(() => {
        dispatch(actions.contribute_specific_shelter())
    }, [dispatch])

    const contributeWholeOrg = useCallback(() => {
        dispatch(actions.contribute_whole_org())
    }, [dispatch])

    const selectSpecificShelterInput = useMemo(() => {
        return <SelectSpecificShelterInput shelters={shelters} specificTypeOfContribution={typeOfContribution.specific} />
    }, [shelters, typeOfContribution])

    return(
        <div className="ChooseContribution">
            <NavProgress />
            <MainHeader value="Vyberte si možnosť, ako chcete pomôcť" />
            <ContributionType 
                selectSpecificContribution={contributeSpecificShelter} 
                selectWholeOrgContribution={contributeWholeOrg}
                whole={typeOfContribution.wholeOrg}
                error={fetchErrorShelter} />
            { fetchErrorShelter ? <h1 style={{ margin: "56px 0 0 0", fontFamily: "Public Sans"}}>  {fetchErrorShelter}  </h1>: selectSpecificShelterInput }
            <ContributionValue />
            <div className="ContributionBtn">
                <Button url="/contact" buttonProperties={buttonProperties} disabled={!continueCondition} />
            </div>     
        </div>
    );
}

export default Contribution;
