import React from 'react';

import SecondaryHeader from "../../../shared/secondaryHeader/secondaryHeader";

const contributionValueHeader = (props) => {
    
    return(
        <div style={{ display: "flex", justifyContent: "space-between", margin: "40px 0 0 0"}}>
            <SecondaryHeader value="Suma, ktorou chcem prispieť" /> 
            <SecondaryHeader value="Povinné pole" />
        </div>
    );
}

export default React.memo(contributionValueHeader);
