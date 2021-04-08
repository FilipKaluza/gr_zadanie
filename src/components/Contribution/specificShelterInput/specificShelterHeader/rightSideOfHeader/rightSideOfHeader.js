import React from 'react';

const righttSideOfHeader = (props) => {

    let specificShelter = "Nepovinné pole"
    if (props.specific) {
        specificShelter = "Povinné pole"
    }
    
    return (<p className="ChooseSpecificRequiredOrNot" > {specificShelter} </p>);
}

export default righttSideOfHeader;
