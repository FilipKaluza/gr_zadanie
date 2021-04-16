import React from 'react';

// import child components
import SelectSpecificShelterInputHeader from "./SelectSpecificHeader/SelectSpecificHeader";
import { useDispatch, useSelector } from "react-redux";

import * as actions from "../../store/actions/index";

import { Select } from 'antd';
const { Option } = Select;

const SelectSpecificShelterInput = (props) => {

    const dispatchSelectSheler = useDispatch();
    const selectedShelter = useSelector(state => state.typeOfContributionReducer.selectedShelter)
    
    const selectShelterHandler = (value, object) => {
        dispatchSelectSheler(actions.set_shelter(object.id, value )) 
    };

    return(
        <>
            <SelectSpecificShelterInputHeader value={ props.specificTypeOfContribution ? "Povinné pole" : "Nepovinné pole"} />
            <Select placeholder="Vyberte si útulok zo zoznamu" value={selectedShelter} onChange={(value, object) => selectShelterHandler(value, object)}  > 
                { props.shelters ? props.shelters.map(shelter => {
                    return (<Option key={shelter.id} id={shelter.id} value={shelter.name} >
                        {shelter.name}
                    </Option>);
                }) : <Option value="Načítavam útulky"> </Option> }
            </Select>
        </>
    )
};

export default SelectSpecificShelterInput;