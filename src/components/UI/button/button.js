import { memo } from 'react';
import {useHistory} from 'react-router-dom';

import { StyledButton } from "../../shared/StyledComponents/StyledComponents";

const Button = (props) => {

    const history = useHistory();

    const handleClick = () => {
        return history.push(props.url)
    }

    return(
        <StyledButton buttonProperties={props.buttonProperties}  disabled={props.disabled} onClick={handleClick} > {props.buttonProperties.value} </StyledButton>
    );

} 
        
export default memo(Button);
