import React from 'react';

import Select from "react-select";

const SelectInputTest = (props) => {

    let options = "Načítavam údaje"
    if (props.shelters) {
        options = [
            props.shelters.map(shelter => {
                return { label: shelter.name, value: shelter.name }
            })
        ];
    }

    const customStyles = {
        container: (provided) => ({
            ...provided,
            height: "74px",
            width: "100%"
        }),
        control: (provided ) => ({
            ...provided,
            cursor: "pointer",
            border: "2px solid #DFDFDF",
            borderRadius: "8px",
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
        })
    }


    return(
        <>
            <Select defaultValue="Holáá" styles={customStyles} options={options[0]} onChange={props.changed} placeholder="Vyberte útulok zo zoznamu" />
        </>
    )
};

export default SelectInputTest;