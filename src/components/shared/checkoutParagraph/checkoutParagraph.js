import React from 'react';
import styled from "styled-components";

const StyledParagraph = styled.p`
    font-family: 'Public Sans';
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
    color: #2F2F2F;
    @media (max-width: 740px) {
        margin: 10px 25px;
        font-size: 14px;
    }
    `
const checkoutParagraph = (props) => <StyledParagraph > {props.value} </StyledParagraph>

export default checkoutParagraph;
