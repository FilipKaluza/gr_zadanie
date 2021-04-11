import React from 'react';

// import child components
import SelectSpecificShelterInputHeader from "./selectSpecificShelterInputHeader/selectSpecificShelterInputHeader";

import { useDispatch, useSelector } from "react-redux";

import * as actions from "../../store/actions/index";

import Select from "react-select";

const SelectSpecificShelterInput = (props) => {

    const dispatchSelectSheler = useDispatch();
    const selectedShelter = useSelector(state => state.typeOfContributionReducer.selectedShelter)
    
    let options = "Načítavam údaje"
    if (props.shelters) {
        options = [
            props.shelters.map(shelter => {
                return { label: shelter.name, value: shelter.name }
            })
        ];
    }

    let customStyles = {
        container: (provided) => ({
            ...provided,
            height: "74px",
            width: "100%",
        }),
        control: (provided, props ) => ({
            ...provided,
            cursor: "pointer",
            border: "1px solid #C4794F",
            borderRadius: "8px",
            '&:hover': {
                border: "2px solid #C4794F",
            },
            boxShadow: "none",
            fontFamily: 'Public Sans'
            
        }),
        indicatorsContainer: (provided) => ({
            ...provided,
            height: "74px",
            width: "15%",
            display: "flex",
            alignItems: "center",
        }),
        dropdownIndicator: (provided, state) => ({
            ...provided,
            color: state.isFocused ? "#FFFFFF" : "#CD8B65",
            margin: "0 auto",

        }),
        indicatorSeparator: (provided) => ({
            ...provided,
            border: "1px solid #CD8B65",
            opacity: "0.5"
        }),
        option: (provided, state) => ({
            ...provided,
            backgroundColor: state.isSelected || state.isFocused ? "#CD8B65" : "fff",
            cursor: "pointer"
        }),
        placeholder: (provided) => ({
            ...provided,
            fontSize: "16px",
            color: "#000"
        }),
        singleValue: (provided) => ({
            ...provided,
            fontSize: "16px",
            color: "#000"
        }),
        menuList: (provided) => ({
            ...provided,
            fontSize: "16px",
            color: "#000"
        }),
    }

    if (window.screen.width <= 740) {
        customStyles = {
            ...customStyles,
            container: (provided) => ({
                ...provided,
                height: "74px",
                margin: "0 25px"
            })
        }
    }

    let selectedOption = null
    if (selectedShelter) {
        selectedOption = { value: selectedShelter, label: selectedShelter }
    }
    

    const selectShelterHandler = (selectedOption) => {
        let indexOfSHelter = (props.shelters.findIndex(shelter => shelter.name === selectedOption.label))
        if (indexOfSHelter === -1) {
            indexOfSHelter = undefined;
        } // this is helper function, if user have to choose specific shler, he choose and after that he cancel his choice, shelter_id become -1 insteal undefined, which cause Pokračovať Enabled, small bug fix
        dispatchSelectSheler(actions.set_shelter(indexOfSHelter, selectedOption.label ))
    };

    return(
        <>
            <SelectSpecificShelterInputHeader value={ props.specificTypeOfContribution ? "Povinné pole" : "Nepovinné pole"} />
            <Select value={selectedOption} styles={customStyles} options={options[0]} onChange={selectShelterHandler} placeholder="Vyberte útulok zo zoznamu" />
        </>
    )
};

export default SelectSpecificShelterInput;