import React from 'react';
import {useHistory} from 'react-router-dom';

import styled from 'styled-components'

const handleBackgroundColor = color => {
    switch(color) {
        case "Enabled":
            return "linear-gradient(115.41deg, #CD8A64 -1.77%, #C4794F 73.03%);"
        case "Disabled":
            return "#9F9F9F;"
        default:
            return "#F3E2D9;"
    }
}

const StyledButton = styled.button`
    width: ${ props => props.buttonProperties.value === "Späť" ? "81px;" : "124px;"}
    height: 59px;
    background: ${ props => handleBackgroundColor(props.buttonProperties.className)}
    border-radius: 100px;
    border: none;
    font-family: Public Sans;
    font-style: normal;
    font-weight: 800;
    box-shadow: ${ props => props.buttonProperties.notAllowed ? "none;" : "0px 100px 80px rgba(0, 0, 0, 0.07), 0px 41.7776px 33.4221px rgba(0, 0, 0, 0.0503198), 0px 22.3363px 17.869px rgba(0, 0, 0, 0.0417275), 0px 12.5216px 10.0172px rgba(0, 0, 0, 0.035), 0px 6.6501px 5.32008px rgba(0, 0, 0, 0.0282725), 0px 2.76726px 2.21381px rgba(0, 0, 0, 0.0196802);"}
    color: ${ props => props.buttonProperties.value === "Späť" ? "#2F2F2F;" : "#fff;" }
    font-size: 14px;
    line-height: 19px;
    cursor: ${ props => props.buttonProperties.notAllowed ? "not-allowed;" : "pointer;"}
    outline: none;
    @media (max-width: 740px) {
        width: 150px;
        height: 80px;
        margin: 0 25px;
    }
    `

const Button = (props) => {

    const history = useHistory();

    const handleClick = () => {
        return history.push(props.url)
    }

    return(
        <StyledButton buttonProperties={props.buttonProperties}  disabled={props.buttonProperties.notAllowed} onClick={handleClick} > {props.buttonProperties.value} </StyledButton>
    );

} 
        

export default React.memo(Button);
