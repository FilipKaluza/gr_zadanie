import React from 'react';

import styled from "styled-components";

const StyledMainHeader = styled.h1`
    font-family: 'Hind', sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 46px;
    line-height: 52px;
    margin-top: 28px;
    `


const mainHeader = (props) => <StyledMainHeader > {props.value} </StyledMainHeader>

export default React.memo(mainHeader);
