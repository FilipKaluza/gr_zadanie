import React from 'react';

// import child components
import SpecificShelterHeader from "./specificShelterHeader/specificShelterHeader";

// import css
import "./specificShelterInput.css";

const specificShelterInput = (props) => {

    let input = "Načítavam údaje"

    if (props.shelters) {
        input = 
        <select className="SelectShelter" onChange={props.changed} >
            {props.shelters.map( (shelter) => {
                return <option key={shelter.id} value={shelter.name} > {shelter.name} </option>
            })}
        </select>
    }

    return(
        <React.Fragment>
            <SpecificShelterHeader specific={props.specific} />
            {input}
        </React.Fragment>
    );
};

export default specificShelterInput;
