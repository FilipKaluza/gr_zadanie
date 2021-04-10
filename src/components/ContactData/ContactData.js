import React, { useCallback } from 'react';

// connnect Redux and action for redux reducer
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../store/actions/index";

// import child components
import MainHeaderContactData from "./mainheaderContactData/mainHeaderContactData";
import SecondaryHeaderContactData from "./secondaryHeaderContactData/secondaryHeaderContactData";
import Input from "../UI/input/input";
import PhoneInput from "../UI/phoneInput/phoneInput";
import Button from "../UI/button/button";

// import checkValidityfunction
import checkValidity from "..//utility/checkValidity";

const ContactData = (props) => {

    const contactState = useSelector( state => state.contactDataReducer.generalInputs )
    const phoneState = useSelector( state => state.contactDataReducer.phone )
    const dispatch = useDispatch();

    const inputChangedHandler = useCallback((event, inputIdentifier) => {
        const updatedContactForm = {...contactState };
        const updatedFormElement = { ...updatedContactForm[inputIdentifier] }; //I need to have access to values in specific key
        updatedFormElement.value = event.target.value // set new value to specific input
        updatedFormElement.valid = checkValidity(updatedFormElement.value, updatedFormElement.validation) // check if specific field is valid 
        updatedFormElement.touched = true; 
        updatedContactForm[inputIdentifier] = updatedFormElement

        dispatch(actions.update_gen_input(updatedContactForm)) // dispatch action for update changed input in reducer
    }, [contactState, dispatch])

    const phoneChangeHandler = useCallback((value) => {
        const updatedState = { ...phoneState }
        updatedState.value = value.value
        updatedState.valid = checkValidity(updatedState.value, updatedState.validation )
        updatedState.touched = true
        dispatch(actions.update_phone_input(updatedState))

    }, [phoneState, dispatch])

    const formElementArray = [];
    for (let key in contactState) {
        formElementArray.push({
            id: key,
            config: contactState[key]
        });
    }

    
    let inputs = formElementArray.map(formElement => (
            <Input
                key={formElement.id}
                name={formElement.config.elementConfig.name}
                elementType={formElement.config.elementType}
                elementConfig={formElement.config.elementConfig}
                value={formElement.config.value}
                changed={(event) => inputChangedHandler(event, formElement.id)}
                isValid={formElement.config.valid}
                shouldValidate={formElement.config.validation}
                touched={formElement.config.touched}
                class= {formElement.config.valid  ? "form-group-valid" : "form-group-not-valid"}
                label={formElement.config.elementConfig.label}
                required={formElement.config.validation.required} /> 
    ));

    const buttonBackProperties = {
        className: "Back",
        value: "Späť",
        disabled: false
    }

    let continueBtnProperties = {
        className: "Disabled",
        value: "Pokračovať",
        disabled: true
    }

    if (contactState.name.valid && contactState.email.valid && contactState.surname.valid) {
        continueBtnProperties = {
            ...continueBtnProperties,
            className: "Enabled",
            disabled: false
        }
    }

    return(
        <div className="ContactData" >
            <MainHeaderContactData />
            <SecondaryHeaderContactData />
            {inputs}
            <PhoneInput changed={value => phoneChangeHandler({value})}  isValid={phoneState.valid} touched={phoneState.touched} />
            <div style={{ display: "flex", justifyContent: "space-between", margin: "68px 0 0 0" }} >
                <Button url="/" buttonProperties={buttonBackProperties} />
                <Button url="/checkout" buttonProperties={continueBtnProperties} />
            </div>
        </div>
    );
};

export default ContactData;

