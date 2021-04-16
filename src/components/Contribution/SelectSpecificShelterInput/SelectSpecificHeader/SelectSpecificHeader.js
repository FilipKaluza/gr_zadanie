import React from 'react';

// import child components
import SecondaryHeader from "../../../shared/secondaryHeader/secondaryHeader";

const specificShelterHeader = (props) => {

    return(
        <div className="ChooseSpecific" style={{ display: "flex", justifyContent: "space-between", margin: "56px 0 0 0" }} >
            <SecondaryHeader value="Najviac mi záleží na útulku" />
            <SecondaryHeader value={props.value}  />
        </div>
    );
}

export default specificShelterHeader;
