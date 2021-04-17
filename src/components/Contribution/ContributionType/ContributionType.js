import React from 'react';

import Row from "antd/lib/row";

import classNames from 'classnames';

// import images
import { ReactComponent as Specific } from "../../../assets/images/specific.svg";
import { ReactComponent as WholeOrganisation } from "../../../assets/images/wholeOrganisation.svg";

const ContributionType = (props) => {


    return(
        <Row className="ContributionCards">
            <div className={classNames("Card Specific", {"CardActive" : !props.whole}, {"DisabledCard": props.error})} onClick={ props.error ? "#" : props.selectSpecificContribution } >
                <div className={classNames("CardImageWrapper", {"ActiveWrapper" : !props.whole})} >
                    <Specific />
                </div>
                <h2 className={classNames({"DesActive": !props.whole})} > Chcem finančné prispieť konkrétnmeu útulku </h2>
            </div>
            <div className={classNames("Card WholeOrg", { "CardActive": props.whole } )} onClick={props.selectWholeOrgContribution} >
                <div className={classNames("CardImageWrapper" , {"ActiveWrapper" : props.whole})} >
                    <WholeOrganisation />
                </div>
                <h2 className={classNames({"DesActive": props.whole})} > Chcem finančné prispieť celej nadácii </h2>
            </div>
        </Row>
    );
};

export default ContributionType;
