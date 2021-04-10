import React from 'react';
import {useHistory} from 'react-router-dom';

import "./button.css";

const Button = (props) => {

    const history = useHistory();

    const handleClick = () => {
        return history.push(props.url)
    }

    return(
        <button type="button" className={props.buttonProperties.className} disabled={props.buttonProperties.disabled} onClick={handleClick} >{props.buttonProperties.value}</button>
    );

} 
        

export default Button;
