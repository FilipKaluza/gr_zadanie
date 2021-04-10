import React, { useState } from 'react';

import { useSelector } from "react-redux";

import axios from "axios";

// import child components
import CheckoutMainHeader from "./checkoutMainHeader/checkoutMainHeader";
import Checkbox from "./checkbox/checkbox";
import Button from "../UI/button/button";

import "./Checkout.css";

const Checkout = () => {

    const [checked, setChecked] = useState(false);

    const contributionState = useSelector(state => state.contributionReducer )
    const shelterState = useSelector( state => state.shelterIdReducer )
    const contactDataState = useSelector( state => state.contactDataReducer )
    const [ response, setResponse ] = useState(null)
    const [ error, setError ] = useState(null)

    const handlerCheckbox = () => {
        setChecked(!checked)
    }
    console.log("Checkout")


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
            <CheckoutMainHeader />
            <h3> Akou formou chcem pomôcť  </h3>
            { shelterState.shelter_id ?<p> Chcem finančne prispieť konkrétnemu útulku </p> : <p> Chcem finančne prispieť celej nadácii </p> } 

            <h3> Najviac mi záleží na útulku </h3>
            { shelterState.name ? <p> {shelterState.name} </p> : <p> Prispievam všetkým útulkom rovnomerne </p> } 

            <h3> Suma, ktorou chcem prispieť </h3>
            <p> { contributionState.value } € </p>

            <h3> E-mailová adresa </h3>
            <p> { contactDataState.generalInputs.email.value }  </p>

            <h3> Telefónne číslo </h3>
            { contactDataState.phone.value ?  <p> +{contactDataState.phone.value} </p> : <p> - </p> } 
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
