import { useEffect, useMemo, useCallback } from 'react';

import { useSelector, useDispatch } from "react-redux";
import * as actions from "../store/actions/index";

// import child components
import NavProgress from "../shared/navProgress/navProgress";
import {StyledMainHeader} from "../shared/StyledComponents/StyledComponents";
import ContributionType from "./ContributionType/ContributionType";
import SelectSpecificShelterInput from "./SelectSpecificShelterInput/SelectSpecificShelterInput";
import ContributionValue from "./ContributionValue/ContributionValue";
import Button from "../UI/button/button";

import { Spin } from 'antd';

const Contribution = (props) => {

    const state = useSelector(state => state.contributionReducer )
    const shelters = useSelector(state => state.fetchSheltersReducer )

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(actions.fetchShelters())
    }, [dispatch])


    let buttonProperties = {
        className: "Disabled",
        value: "Pokračovať"
    }

    let continueCondition = state.specific ? state.shelter_id && state.value : state.value
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
        return shelters.loading ? <div className="Loading"> <p> Načítavam útulky </p> <Spin style={{fill: "#000000"}}  /> </div>: <SelectSpecificShelterInput shelters={shelters.shelters} selectedShelter={state.selectedShelter} specificTypeOfContribution={state.specific} />
    }, [shelters, state.specific, state.selectedShelter ])

    const contributionValue = useMemo(() => {
        return <ContributionValue amountOfContribution={state.value} specific={state.specific} customInputTouched={state.customInputTouched} />
    }, [state.value, state.specific, state.customInputTouched])

    return(
        <div className="ChooseContribution">
            <NavProgress />
            <StyledMainHeader> Vyberte si možnosť, ako chcete pomôcť </StyledMainHeader>
            <ContributionType 
                selectSpecificContribution={contributeSpecificShelter} 
                selectWholeOrgContribution={contributeWholeOrg}
                whole={state.wholeOrg}
                error={shelters.error} />
            { shelters.error ? <h1 style={{ margin: "56px 0 0 0", fontFamily: "Public Sans"}}>  {shelters.error}  </h1>: selectSpecificShelterInput }
            {contributionValue}
            <div className="ContributionBtn">
                <Button url="/contact" buttonProperties={buttonProperties} disabled={!continueCondition} />
            </div>     
        </div>
    );
}

export default Contribution;
