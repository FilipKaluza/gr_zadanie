import React from 'react';

const contributionValueHeader = (props) => {
    
    return(
        <div style={{ display: "flex", justifyContent: "space-between"}}>
            <p className="SecondaryHeader" > Suma, ktorou chcem prispieť </p>
            <p className="ChooseSpecificRequiredOrNot"> Povinné pole  </p>
        </div>
    );
}

export default React.memo(contributionValueHeader);
