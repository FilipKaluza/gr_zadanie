import React from 'react';

// import child components
import { StyledSecondaryHeader } from "../../shared/StyledComponents/StyledComponents";


import { useDispatch } from "react-redux";

import * as actions from "../../store/actions/index";

import { Select } from 'antd';
const { Option } = Select;

const SelectSpecificShelterInput = (props) => {

    const dispatchSelectSheler = useDispatch();
    
    const selectShelterHandler = (value, object) => {
        dispatchSelectSheler(actions.set_shelter(object.id, value )) 
    };

    return(
        <>
            <div className="ChooseSpecific" style={{ display: "flex", justifyContent: "space-between", margin: "56px 0 0 0" }} >
                <StyledSecondaryHeader > Najviac mi záleží na útulku </StyledSecondaryHeader>
                <StyledSecondaryHeader > { props.specificTypeOfContribution ? "Povinné pole" : "Nepovinné pole"} </StyledSecondaryHeader>
            </div>
            <Select placeholder="Vyberte si útulok zo zoznamu" value={props.selectedShelter} onChange={(value, object) => selectShelterHandler(value, object)}  > 
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