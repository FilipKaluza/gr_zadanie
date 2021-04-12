import React from 'react';
import { useDispatch, useSelector } from "react-redux";


// import child components
import ContributionValueHeader from "./contributionValueHeader/contributionValueHeader";

// import reducer actions
import * as actions from "../../store/actions/index";

import Row from "antd/lib/row";

// import css
import "./ContributionValue.scss";


const ContributionValue = (props) => {

    const amountOfContribution = useSelector(state => state.amountOfContributionReducer)

    const dispatch = useDispatch();

    const contribute_5 = () => {
        dispatch(actions.select_5())
    }

    const contribute_10 = () => {
        dispatch(actions.select_10())
    }
    const contribute_20 = () => {
        dispatch(actions.select_20())
    }
    const contribute_30 = () => {
        dispatch(actions.select_30())
    }
    const contribute_50 = () => {
        dispatch(actions.select_50())
    }
    const contribute_100 = () => {
        dispatch(actions.select_100())
    }

    const customChangeHandler = (event) => {
        event.preventDefault();
        dispatch(actions.select_by_user(event.target.value))
    }



    const selectCustom = () => {
        dispatch(actions.select_by_user(undefined))
    } // special dispatch for adding a classes (see bellow) to a custom Input when the user clicks on Input

    let customInputClasses = ["ContributionInput"]
    if (amountOfContribution.customInputTouched) {
        customInputClasses.push("ContributeItemSelected")
    }


    return(
        <React.Fragment>
            <ContributionValueHeader />
            <Row className="ContributionItems" >
                <button className={amountOfContribution.value === 5 ? "ContributionButton ContributeItemSelected" : "ContributionButton"} onClick={contribute_5} > 5€ </button>
                <button className={amountOfContribution.value === 10 ? "ContributionButton ContributeItemSelected" : "ContributionButton"} onClick={contribute_10}  > 10€ </button>
                <button className={amountOfContribution.value === 20 ? "ContributionButton ContributeItemSelected" : "ContributionButton"}  onClick={contribute_20}  > 20€ </button>
                <button className={amountOfContribution.value === 30 ? "ContributionButton ContributeItemSelected" : "ContributionButton"} onClick={contribute_30}  > 30€ </button>
                <button className={amountOfContribution.value === 50 ? "ContributionButton ContributeItemSelected" : "ContributionButton"}  onClick={contribute_50} > 50€ </button>
                <button className={amountOfContribution.value === 100 ? "ContributionButton ContributeItemSelected" : "ContributionButton"}  onClick={contribute_100}   > 100€ </button>
                <div className={customInputClasses.join(" ")} onClick={selectCustom} >
                    <Row>
                        <input value={ amountOfContribution.customInputTouched ? amountOfContribution.value : undefined } placeholder="______" onChange={(e) => customChangeHandler(e)}  /> 
                        <p> € </p>
                    </Row>
                </div>
            </Row>
        </React.Fragment>
        
    );
};

export default React.memo(ContributionValue);
