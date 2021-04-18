import { memo, Fragment } from 'react';

import {StyledSecondaryHeader} from "../../shared/StyledComponents/StyledComponents";
import {StyledParagraph} from "../../shared/StyledComponents/StyledComponents";

const Summary = (props) => {
    return (
        <Fragment>
            <StyledSecondaryHeader> Akou formou chcem pomôcť" </StyledSecondaryHeader>
            <StyledParagraph> {props.state.shelter_id ? "Chcem finančne prispieť konkrétnemu útulku" : "Chcem finančne prispieť celej nadácii"} </StyledParagraph>

            <StyledSecondaryHeader> Najviac mi záleží na útulku </StyledSecondaryHeader>
            <StyledParagraph> { props.state.selectedShelter ? props.state.selectedShelter: "Prispievam všetkým útulkom rovnomerne" } </StyledParagraph>

            <StyledSecondaryHeader> Suma, ktorou chcem prispieť </StyledSecondaryHeader>
            <StyledParagraph> {props.state.value + "€" } </StyledParagraph>

            <StyledSecondaryHeader> E-mailová adresa </StyledSecondaryHeader>
            <StyledParagraph> { props.state.generalInputs.email.value } </StyledParagraph>

            <StyledSecondaryHeader> Telefónne číslo </StyledSecondaryHeader>
            <StyledParagraph> { props.state.phone.value ?  "+" + props.state.phone.value  : "-" } </StyledParagraph>
        </Fragment>
    );
       
};

export default memo(Summary);
