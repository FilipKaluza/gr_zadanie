import React from 'react';
import styled from "styled-components";

const StyledSecondaryHeader = styled.h3`
    font-style: normal;
    font-weight: 800;
    font-size: 14px;
    font-family: 'Public Sans';
    line-height: 19px;
    color: #2F2F2F;
    @media (max-width: 740px) {
        padding: 0 25px 0 25px;
        font-size: 13px;
    }
    `
const secondaryHeader = (props) => <StyledSecondaryHeader> {props.value} </StyledSecondaryHeader>

export default React.memo(secondaryHeader);
