import React from 'react';

import SecondaryHeader from "../../shared/secondaryHeader/secondaryHeader";
import CheckoutParagraph from "../../shared/checkoutParagraph/checkoutParagraph";

const Summary = (props) => {
    return(
        <React.Fragment>
            <SecondaryHeader value= "Akou formou chcem pomôcť" />
            <CheckoutParagraph value={ props.state.shelter_id ? "Chcem finančne prispieť konkrétnemu útulku" : "Chcem finančne prispieť celej nadácii" } />

            <SecondaryHeader value="Najviac mi záleží na útulku" />
            <CheckoutParagraph value={ props.state.selectedShelter ? props.state.selectedShelter: "Prispievam všetkým útulkom rovnomerne" } />

            <SecondaryHeader value="Suma, ktorou chcem prispieť" />
            <CheckoutParagraph value={props.state.value + "€" } />

            <SecondaryHeader value="E-mailová adresa" />
            <CheckoutParagraph value={ props.state.generalInputs.email.value } />

            <SecondaryHeader value="Telefónne číslo" />
            <CheckoutParagraph value={ props.state.phone.value ?  "+" + props.state.phone.value  : "-" } />
        </React.Fragment>
    );
       
};

export default React.memo(Summary);
