import { useCallback, useMemo } from 'react';

// connnect Redux and action for redux reducer
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../store/actions/index";

// import child components
import NavProgress from "../shared/navProgress/navProgress";
import {StyledMainHeader} from "../shared/StyledComponents/StyledComponents";
import {StyledSecondaryHeader} from "../shared/StyledComponents/StyledComponents";
import Input from "../UI/input/input";
import PhoneInput from "../UI/phoneInput/phoneInput";
import Button from "../UI/button/button";

// import checkValidityfunction
import checkValidity from "../utility/checkValidity";

// import validityCriteria
import validityCriteria from "../utility/validityCriteria";

const ContactData = (props) => {
    console.log("CONTACT DATA RENDERING")

    const state = useSelector( state => state.contributionReducer )
    const dispatch = useDispatch();
    console.log("contactState")

    const inputChangedHandler = useCallback((event, inputIdentifier) => {
        let value = event.target.value
        let valid = checkValidity(value, validityCriteria[inputIdentifier]) // check if specific field is valid 
        dispatch(actions.update_input(inputIdentifier, value, valid)) 
    }, [dispatch])


    const phoneChangeHandler = useCallback((value) => {
        let actualValue = value.value 
        let valid = checkValidity(actualValue, validityCriteria["phone"] )
        dispatch(actions.update_input("phone", actualValue, valid))
    }, [dispatch])

    const configInputs = {
        name: {
            elementType: "input",
            elementConfig: {
                type: "text",
                placeholder: "Zadajte Vaše meno",
                label: "Meno"
            }
        },
        surname: {
            elementType: "input",
            elementConfig: {
                type: "text",
                placeholder: "Zadajte Vaše priezvisko",
                label: "Vaše priezvisko"
            }
        },
        email: {
            elementType: "input",
            elementConfig: {
                type: "email",
                placeholder: "Zadajte Váš e-mail",
                label: "E-mailová adresa"
            }
        }
    }

    const formElementArray = [];
    for (let key in state.generalInputs) {
        formElementArray.push({
            id: key,
            config: state.generalInputs[key]
        });
    }
    
    let inputs = formElementArray.map(formElement => (
            <Input
                key={formElement.id}
                elementConfig={configInputs[formElement.id].elementConfig}
                changed={(event) => inputChangedHandler(event, formElement.id)}
                isValid={formElement.config.valid}
                touched={formElement.config.touched}
                label={configInputs[formElement.id].elementConfig.label}
                required={true}
                value={formElement.config.value} /> 
    ));

    const buttonBackProperties = useMemo(() => {
        return {
            className: "Back",
            value: "Späť",
            notAllowed: false
        }
    }, [])

    let continueCondition = state.generalInputs.name.valid && state.generalInputs.email.valid && state.generalInputs.surname.valid

    const continueBtnProperties = useMemo(() => {
        let continueBtnProperties = null;
        if (continueCondition) {
            continueBtnProperties = {
                value: "Pokračovať",
                className: "Enabled",
            }
        } else {
            continueBtnProperties = {
                className: "Disabled",
                value: "Pokračovať",
            }
        }
        return continueBtnProperties
    }, [continueCondition]) // this element re-create only when specific input validity change, it's avoid on re-creating button on every render


    const phoneInput = useMemo(() => {
        return <PhoneInput changed={value => phoneChangeHandler({value})} value={state.phone.value} isValid={state.phone.valid} touched={state.phone.touched} />
    }, [state.phone, phoneChangeHandler])

    return(
        <div className="ContactData" >
            <NavProgress />
            <StyledMainHeader> Potrebujeme od Vás zopár informácií </StyledMainHeader>
            <StyledSecondaryHeader> O Vás </StyledSecondaryHeader>
            {inputs}
            {phoneInput}
            <div style={{ display: "flex", justifyContent: "space-between", margin: "68px 0 0 0" }} >
                <Button url="/" buttonProperties={buttonBackProperties} />
                <Button url="/checkout" buttonProperties={continueBtnProperties} disabled={!continueCondition} />
            </div>
        </div>
    );
};

export default ContactData;

