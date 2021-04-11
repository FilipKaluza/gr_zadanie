import React, { useEffect, useState, useMemo, useCallback } from 'react';
import axios from "axios";

import { useSelector, useDispatch } from "react-redux";
import * as actions from "../store/actions/index";

// import child components
import NavProgress from "../shared/navProgress/navProgress";
import MainHeader from "../shared/mainHeader/mainHeader";
import ContributionType from "./contributionType/contributionType";
import SelectSpecificShelterInput from "./selectSpecificShelterInput/selectSpecificShelterInput";
import ContributionValue from "./ContributionValue/ContributionValue";
import Button from "../UI/button/button";

const Contribution = (props) => {

    const [ shelters, setShelters ] = useState()
    const amountOfContribution = useSelector( state => state.amountOfContributionReducer.value )
    const typeOfContribution = useSelector(state => state.typeOfContributionReducer )

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


    let buttonProperties = {
        className: "Disabled",
        notAllowed: true,
        value: "Pokračovať"
    }

    if (typeOfContribution.specific && typeOfContribution.shelter_id && amountOfContribution) {
        buttonProperties = {
            ...buttonProperties,
            className: "Enabled",
            notAllowed: false
        }
    }

    if (typeOfContribution.wholeOrg && amountOfContribution) {
        buttonProperties = {
            ...buttonProperties,
            className: "Enabled",
            notAllowed: false
        }
    }

    const contributeSpecificShelter = useCallback(() => {
        dispatch(actions.contribute_specific_shelter())
    }, [dispatch])

    const contributeWholeOrg = useCallback(() => {
        dispatch(actions.contribute_whole_org())
    }, [dispatch])

    const contributionType = useMemo(() => {
        return <ContributionType 
        selectSpecificContribution={contributeSpecificShelter} 
        selectWholeOrgContribution={contributeWholeOrg}
        whole={typeOfContribution.wholeOrg} />
    }, [typeOfContribution, contributeWholeOrg, contributeSpecificShelter])

    const selectSpecificShelterInput = useMemo(() => {
        return <SelectSpecificShelterInput shelters={shelters} specificTypeOfContribution={typeOfContribution.specific} />
    }, [shelters, typeOfContribution])

    let flexclass = {width: "100%", display: "flex", justifyContent: "flex-end" , margin: "72px 0 0 0" }
    if(window.screen.width <= 740 ) {
        flexclass = {width: "100%", display: "flex", justifyContent: "center" , margin: "72px 0 0 0" }
    }

    return(
        <div className="ChooseContribution">
            <NavProgress />
            <MainHeader value="Vyberte si možnosť, ako chcete pomôcť" />
            {contributionType}
            {selectSpecificShelterInput}
            <ContributionValue />
            <div style={flexclass} >
                <Button url="/contactdata" buttonProperties={buttonProperties} />
            </div>     
        </div>
    );
}

export default Contribution;
