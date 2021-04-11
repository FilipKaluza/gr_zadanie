import React from 'react';

import styled from "styled-components";

const StyledMainHeader = styled.h1`
    font-family: 'Hind', sans-serif;
    width: 80%;
    font-style: normal;
    font-weight: bold;
    font-size: 46px;
    line-height: 52px;
    margin-top: 28px;
    @media (max-width: 740px) {
        font-size: 26px;
        margin: 26px 20px 0 20px;
    }
    `


const mainHeader = (props) => <StyledMainHeader > {props.value} </StyledMainHeader>

export default React.memo(mainHeader);
