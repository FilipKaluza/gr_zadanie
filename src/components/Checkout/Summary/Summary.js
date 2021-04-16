import React from 'react';

import SecondaryHeader from "../../shared/secondaryHeader/secondaryHeader";
import CheckoutParagraph from "../../shared/checkoutParagraph/checkoutParagraph";

const dataToCheck = (props) => {
    return(
        <React.Fragment>
            <SecondaryHeader value= "Akou formou chcem pomôcť" />
            <CheckoutParagraph value={ props.typeOfContribution.shelter_id ? "Chcem finančne prispieť konkrétnemu útulku" : "Chcem finančne prispieť celej nadácii" } />

            <SecondaryHeader value="Najviac mi záleží na útulku" />
            <CheckoutParagraph value={ props.typeOfContribution.selectedShelter ? props.typeOfContribution.selectedShelter: "Prispievam všetkým útulkom rovnomerne" } />

            <SecondaryHeader value="Suma, ktorou chcem prispieť" />
            <CheckoutParagraph value={props.amoutOfContribution + "€" } />

            <SecondaryHeader value="E-mailová adresa" />
            <CheckoutParagraph value={ props.contactDataState.generalInputs.email.value } />

            <SecondaryHeader value="Telefónne číslo" />
            <CheckoutParagraph value={ props.contactDataState.phone.value ?  "+" + props.contactDataState.phone.value  : "-" } />
        </React.Fragment>
    );
       
};

export default React.memo(dataToCheck);
