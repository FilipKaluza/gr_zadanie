import React, { useState } from 'react';

import { useSelector } from "react-redux";

import axios from "axios";

// import child components
import NavProgress from "../shared/navProgress/navProgress";
import {StyledMainHeader} from "../shared/StyledComponents/StyledComponents";
import Summary from "./Summary/Summary";
import { Checkbox } from 'antd';
import Button from "../UI/button/button";
import { HeartOutlined, FrownOutlined } from '@ant-design/icons';

const Checkout = () => {

    const [checked, setChecked] = useState(false);

    const state = useSelector(state => state.contributionReducer )
    const [ response, setResponse ] = useState(null)
    const [ error, setError ] = useState(null)

    const checboxHandler = () => {
        setChecked(!checked)
    }

    const sendForm = () => {
        const body = {
            "firstName": state.generalInputs.name.value,
            "lastName": state.generalInputs.surname.value,
            "email": state.generalInputs.email.value,
            "phone": state.phone.value,
            "value": state.value,
            "shelterID": state.shelter_id
        }

        axios.post("https://frontend-assignment-api.goodrequest.com/api/v1/shelters/contribute", body)
            .then(response => {
                const resMessage = response.data.messages[0].message
                setResponse(resMessage + ". Ďakujeme ")
            })
            .catch(error => {
                setError("Problém pri spojení so serverom, skúte to prosím neskôr. Ďakujeme za pochopenie")
            }) 
    }

    const buttonBackProperties = {
        className: "Back",
        value: "Späť",
        disabled: false
    }

    let sendButton = {
        className: "Disabled",
        value: "Odoslať formulár",
        disabled: true
    }

    if (checked) {
        sendButton = {
            ...sendButton,
            className: "Enabled"
        }
    }

    return(
        <div className="Checkout">
            <NavProgress />
            <StyledMainHeader> Skontrolujte si zadané údaje </StyledMainHeader>
            <Summary state={state} />
            <Checkbox onClick={checboxHandler} indeterminate={checked} checked={checked}  > Súhlasím so spracovaním mojich osobných údajov </Checkbox>
            <div style={{ display: "flex", justifyContent: "space-between", margin: "68px 0 0 0" }} >
                <Button url="/contact" buttonProperties={buttonBackProperties} />
                <button className={sendButton.className} disabled={!checked} onClick={sendForm} > {sendButton.value} </button>
            </div>
            { response ? <h1 className="responseMessage" > {response} <HeartOutlined /> </h1> : null}
            { error ? <h1 className="errorMessage" > {error} <FrownOutlined /> </h1> : null}
        </div>
    );
};

export default Checkout;
