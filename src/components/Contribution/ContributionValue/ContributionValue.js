import React from 'react';
import { useDispatch, useSelector } from "react-redux";

import classNames from 'classnames';

// import child components
import ContributionValueHeader from "./ContributionValueHeader/ContributionValueHeader";

// import reducer actions
import * as actions from "../../store/actions/index";

import Row from "antd/lib/row";

const ContributionValue = (props) => {

    const amountOfContribution = useSelector(state => state.amountOfContributionReducer)

    const dispatch = useDispatch();

    const contributionValues = [5, 10, 20, 30, 50, 100];

    let contributionButtons = contributionValues.map((item, index) => {
        return <button key={index} value={item} className={classNames("ContributionButton", {"ContributeItemSelected": Number(amountOfContribution.value) === item && !amountOfContribution.customInputTouched} )} onClick={(e) => selectContributeWithBtn(e)} > {item}€ </button>
    })


    const selectContributeWithBtn = (event) => {
        dispatch(actions.select_contribute_with_button(event.target.value));
    }

    const customChangeHandler = (event) => {
        dispatch(actions.select_by_user(event.target.value))
    }

    const selectCustom = () => {
        dispatch(actions.select_by_user(undefined))
    } // special dispatch for adding a classes (see bellow) to a custom Input when the user clicks on Input


    return(
        <React.Fragment>
            <ContributionValueHeader />
            <Row className="ContributionItems" >
                {contributionButtons}
                <div className={classNames("ContributionInput", {"ContributeItemSelected" : amountOfContribution.customInputTouched})} onClick={selectCustom} >
                    <Row>
                        <input value={ amountOfContribution.customInputTouched ? amountOfContribution.value : "" } placeholder="______" onChange={(e) => customChangeHandler(e)}  /> 
                        <p> € </p>
                    </Row>
                </div>
            </Row>
        </React.Fragment>
        
    );
};

export default React.memo(ContributionValue);
