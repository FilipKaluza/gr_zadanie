import React from 'react';
import styled from "styled-components";

const StyledSecondaryHeader = styled.h3`
    font-style: normal;
    font-weight: 800;
    font-size: 14px;
    line-height: 19px;
    color: #2F2F2F;
    `
const secondaryHeader = (props) => <StyledSecondaryHeader> {props.value} </StyledSecondaryHeader>

export default React.memo(secondaryHeader);
