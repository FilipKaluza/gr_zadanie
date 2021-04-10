import React, { useState } from 'react';

import { useSelector } from "react-redux";

import axios from "axios";

// import child components
import NavProgress from "../shared/navProgress/navProgress";
import CheckoutMainHeader from "./checkoutMainHeader/checkoutMainHeader";
import DataToCheck from "./dataToCheck/dataToCheck";
import Checkbox from "./checkbox/checkbox";
import Button from "../UI/button/button";

import "./Checkout.css";

const Checkout = () => {

    const [checked, setChecked] = useState(false);

    const contributionState = useSelector(state => state.contributionReducer )
    const shelterState = useSelector( state => state.shelterReducer )
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
            "value": contributionState.value,
            "shelterID": shelterState.shelter_id
        }

        axios.post("https://frontend-assignment-api.goodrequest.com/api/v1/shelters/contribute", body)
            .then(response => {
                const resMessage = response.data.messages[0].message
                setResponse(resMessage + ". Ďakujeme :)")
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
            <CheckoutMainHeader />
            <DataToCheck contributionState={contributionState} shelterState={shelterState} contactDataState={contactDataState} />
            <Checkbox 
                checked={checked}
                onChange={handlerCheckbox}
                label={"Súhlasím so spracovaním mojich osobných údajov"}
                 />
            <div style={{ display: "flex", justifyContent: "space-between", margin: "68px 0 0 0" }} >
                <Button url="/contactdata" buttonProperties={buttonBackProperties} />
                <button className={sendButton.className} disabled={sendButton.disabled} onClick={sendForm} > {sendButton.value} </button>
            </div>
            { response ? <h1 className="responseMessage" > {response} </h1> : null}
            { error ? <h1 className="errorMessage" > {error} </h1> : null}
        </div>
    );
};

export default Checkout;
