import React from 'react';

import Row from "antd/lib/row";

// import images
import Specific from "../../../assets/images/Specific.svg";
import WholeOrganisation from "../../../assets/images/WholeOrganisation.svg";

// import css
import "./contributionType.css";

const ContributionType = (props) => {

    let cardClasses = {
        Specific: {
            Card: ["Card Specific CardActive"],
            CardImageWrapper: ["CardImageWrapper ActiveWrapper"],
            Description: ["DesActive"]
        },

        WholeOrg: {
            Card: ["Card WholeOrg"],
            CardImageWrapper: ["CardImageWrapper"],
            Description: [""]
        }
    }

    if(props.whole) {
        cardClasses = {
            Specific: {
                Card: ["Card Specific"],
                CardImageWrapper: ["CardImageWrapper"],
                Description: [""]
            },
    
            WholeOrg: {
                Card: ["Card WholeOrg CardActive"],
                CardImageWrapper: ["CardImageWrapper ActiveWrapper"],
                Description: ["DesActive"]
            }
        }
    
    } 

    return(
        <Row className="ContributionCards">
            <div className={cardClasses.Specific.Card.join(" ")} onClick={props.selectSpecificContribution} >
                <div className={cardClasses.Specific.CardImageWrapper.join(" ")} >
                    <img className="icon" src={Specific} alt="Specific" />
                </div>
                <h2 className={cardClasses.Specific.Description.join(" ")} > Chcem finančné prispieť konkrétnmeu útulku </h2>
            </div>
            <div className={cardClasses.WholeOrg.Card.join(" ")} onClick={props.selectWholeOrgContribution} >
                <div className={cardClasses.WholeOrg.CardImageWrapper.join(" ")} >
                    <img src={WholeOrganisation} alt="WholeOrganisation" />
                </div>
                <h2 className={cardClasses.WholeOrg.Description.join(" ")} > Chcem finančné prispieť celej nadácii </h2>
            </div>
        </Row>
    );
};

export default ContributionType;
