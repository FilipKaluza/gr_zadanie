import React from 'react';

import Row from "antd/lib/row";

// import images
import { ReactComponent as Specific } from "../../../assets/images/specific.svg";
import { ReactComponent as WholeOrganisation } from "../../../assets/images/wholeOrganisation.svg";

// import css
import "./contributionType.scss";

const ContributionType = (props) => {

    console.log(props.error)
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

    let specificCarddiv = 
    <div className={cardClasses.Specific.Card.join(" ")} onClick={ props.selectSpecificContribution } >
        <div className={cardClasses.Specific.CardImageWrapper.join(" ")} >
            <Specific />
        </div>
        <h2 className={cardClasses.Specific.Description.join(" ")} > Chcem finančné prispieť konkrétnmeu útulku </h2>
    </div>
    if (props.error) {
        cardClasses = {
            Specific: {
                Card: ["Card Specific DisabledCard"],
                CardImageWrapper: ["CardImageWrapper"],
                Description: [""]
            },
    
            WholeOrg: {
                Card: ["Card WholeOrg CardActive"],
                CardImageWrapper: ["CardImageWrapper ActiveWrapper"],
                Description: ["DesActive"]
            }
        }
        specificCarddiv = 
        <div className={cardClasses.Specific.Card.join(" ")}  >
            <div className={cardClasses.Specific.CardImageWrapper.join(" ")} >
                <Specific />
            </div>
            <h2 className={cardClasses.Specific.Description.join(" ")} > Chcem finančné prispieť konkrétnmeu útulku </h2>
        </div>
    }

    return(
        <Row className="ContributionCards">
            {specificCarddiv}
            <div className={cardClasses.WholeOrg.Card.join(" ")} onClick={props.selectWholeOrgContribution} >
                <div className={cardClasses.WholeOrg.CardImageWrapper.join(" ")} >
                    <WholeOrganisation />
                </div>
                <h2 className={cardClasses.WholeOrg.Description.join(" ")} > Chcem finančné prispieť celej nadácii </h2>
            </div>
        </Row>
    );
};

export default ContributionType;
