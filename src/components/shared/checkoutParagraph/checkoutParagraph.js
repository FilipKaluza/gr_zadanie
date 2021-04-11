import React from 'react';
import styled from "styled-components";

const StyledParagraph = styled.p`
    font-family: Public Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
    color: #2F2F2F;
    `
const checkoutParagraph = (props) => <StyledParagraph > {props.value} </StyledParagraph>

export default checkoutParagraph;
