import React, { useReducer } from 'react';
import { useDispatch } from "react-redux";

// import child components
import ContributionValueHeader from "./contributionValueHeader/contributionValueHeader";

// import reducer actions
import * as actions from "../../store/actions/index";

import Row from "antd/lib/row";

// import css
import "./ContributionValue.css";

const markValueReducer = (state, action) => {
    switch(action.type) {
        case "5":
            return { five: true }
        case "10":
            return { ten: true }
        case "20":
            return { twenty: true }
        case "30":
            return { thirty: true }
        case "50":
            return { fifty: true }
        case "100":
            return { hundred: true }
        case "USERINPUT":
            return { userinput: true }
        default:
            throw new Error("This never happen")
    }
}

const ContributionValue = (props) => {

    const [ markValue, dispatchMarkValue ] = useReducer( markValueReducer, { five: false, ten: false, twenty: false, thirty: false, fifty: true, userinput: false} ) 

    const dispatch = useDispatch();

    const inputChangeHandler = (event) => {
        event.preventDefault();
        dispatch(actions.select_by_user(event.target.value))
    }

    const contribute_5 = () => {
        dispatch(actions.select_5())
        dispatchMarkValue({type: "5"})
    }

    const contribute_10 = () => {
        dispatch(actions.select_10())
        dispatchMarkValue({type: "10"})
    }
    const contribute_20 = () => {
        dispatch(actions.select_20())
        dispatchMarkValue({type: "20"})
    }
    const contribute_30 = () => {
        dispatch(actions.select_30())
        dispatchMarkValue({type: "30"})
    }
    const contribute_50 = () => {
        dispatch(actions.select_50())
        dispatchMarkValue({type: "50"})
    }
    const contribute_100 = () => {
        dispatch(actions.select_100())
        dispatchMarkValue({type: "100"})
    }

    return(
        <React.Fragment>
            <ContributionValueHeader />
            <div className="ContributionItems">
                <Row>
                    <button className={markValue.five ? "ContributionButton ContributeItemSelected" : "ContributionButton"} onClick={contribute_5} > 5€ </button>
                    <button className={markValue.ten ? "ContributionButton ContributeItemSelected" : "ContributionButton"} onClick={contribute_10}  > 10€ </button>
                    <button className={markValue.twenty ? "ContributionButton ContributeItemSelected" : "ContributionButton"}  onClick={contribute_20}  > 20€ </button>
                    <button className={markValue.thirty ? "ContributionButton ContributeItemSelected" : "ContributionButton"} onClick={contribute_30}  > 30€ </button>
                    <button className={markValue.fifty ? "ContributionButton ContributeItemSelected" : "ContributionButton"}  onClick={contribute_50} > 50€ </button>
                    <button className={markValue.hundred ? "ContributionButton ContributeItemSelected" : "ContributionButton"}  onClick={contribute_100}   > 100€ </button>
                    <div className={markValue.userinput ? "ContributionInput ContributeItemSelected" : "ContributionInput"} onClick={() => dispatchMarkValue({type: "USERINPUT"})}  >
                        <Row>
                            <input placeholder="______" onChange={(e) => inputChangeHandler(e)}  /> 
                            <p> € </p>
                        </Row>
                    </div>
                </Row>
            </div>
        </React.Fragment>
        
    );
};

export default ContributionValue;
