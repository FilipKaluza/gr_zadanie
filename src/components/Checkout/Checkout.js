import React, { useState } from 'react';

import { useSelector } from "react-redux";

import axios from "axios";

// import child components
import NavProgress from "../shared/navProgress/navProgress";
import MainHeader from "../shared/mainHeader/mainHeader";
import DataToCheck from "./Summary/Summary";
import Checkbox from "./Checkbox/Checkbox";
import Button from "../UI/button/button";
import { HeartOutlined, FrownOutlined } from '@ant-design/icons';

const Checkout = () => {

    const [checked, setChecked] = useState(false);

    const amoutOfContribution = useSelector(state => state.amountOfContributionReducer.value )
    const typeOfContribution = useSelector( state => state.typeOfContributionReducer )
    const contactDataState = useSelector( state => state.contactDataReducer )
    const [ response, setResponse ] = useState(null)
    const [ error, setError ] = useState(null)

    const handlerCheckbox = () => {
        setChecked(!checked)
    }

    const sendForm = () => {
        const body = {
            "firstName": contactDataState.generalInputs.name.value,
            "lastName": contactDataState.generalInputs.surname.value,
            "email": contactDataState.generalInputs.email.value,
            "phone": contactDataState.phone.value,
            "value": amoutOfContribution,
            "shelterID": typeOfContribution.shelter_id
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
            disabled: false,
            className: "Enabled"
        }
    }

    return(
        <div className="Checkout">
            <NavProgress />
            <MainHeader value="Skontrolujte si zadané údaje" />
            <DataToCheck typeOfContribution={typeOfContribution} amoutOfContribution={amoutOfContribution} contactDataState={contactDataState} />
            <Checkbox 
                checked={checked}
                onChange={handlerCheckbox}
                label={"Súhlasím so spracovaním mojich osobných údajov"}
                 />
            <div style={{ display: "flex", justifyContent: "space-between", margin: "68px 0 0 0" }} >
                <Button url="/contact" buttonProperties={buttonBackProperties} />
                <button className={sendButton.className} disabled={sendButton.disabled} onClick={sendForm} > {sendButton.value} </button>
            </div>
            { response ? <h1 className="responseMessage" > {response} <HeartOutlined /> </h1> : null}
            { error ? <h1 className="errorMessage" > {error} <FrownOutlined /> </h1> : null}
        </div>
    );
};

export default Checkout;
