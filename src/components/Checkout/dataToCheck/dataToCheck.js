import React from 'react';

const dataToCheck = (props) => {
    return(
        <React.Fragment>
            <h3> Akou formou chcem pomôcť  </h3>
            { props.typeOfContribution.shelter_id ? <p> Chcem finančne prispieť konkrétnemu útulku </p> : <p> Chcem finančne prispieť celej nadácii </p> } 

            <h3> Najviac mi záleží na útulku </h3>
            { props.typeOfContribution.selectedShelter ? <p> {props.typeOfContribution.selectedShelter} </p> : <p> Prispievam všetkým útulkom rovnomerne </p> } 

            <h3> Suma, ktorou chcem prispieť </h3>
            <p> { props.amoutOfContribution} € </p>

            <h3> E-mailová adresa </h3>
            <p> { props.contactDataState.generalInputs.email.value }  </p>

            <h3> Telefónne číslo </h3>
            { props.contactDataState.phone.value ?  <p> +{props.contactDataState.phone.value} </p> : <p> - </p> }
        </React.Fragment>
    );
       
};

export default React.memo(dataToCheck);
