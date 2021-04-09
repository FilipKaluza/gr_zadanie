import React, { useState } from 'react';

import { useSelector } from "react-redux";

import axios from "axios";

// import child components
import CheckoutMainHeader from "./checkoutMainHeader/checkoutMainHeader";
import Checkbox from "./checkbox/checkbox";

import "./Checkout.css";

const Checkout = () => {

    const [checked, setChecked] = useState(false);

    const contributionState = useSelector(state => state.contributionReducer )
    const shelterReducer = useSelector( state => state.shelterIdReducer )
    const contactDataState = useSelector( state => state.contactDataReducer )

    const handlerCheckbox = (event) => {
        setChecked(!checked)
    }

    console.log(checked)


    return(
        <div className="Checkout">
            <CheckoutMainHeader />
            <h3> Akou formou chcem pomôcť  </h3>
            { shelterReducer.shelter_id ?<p> Chcem finančne prispieť konkrétnemu útulku </p> : <p> Chcem finančne prispieť celej nadácii </p> } 

            <h3> Najviac mi záleží na útulku </h3>
            { shelterReducer.name ? <p> {shelterReducer.name} </p> : <p> Prispievam všetkým útulkom rovnomerne </p> } 

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
        </div>
    );
};

export default Checkout;
