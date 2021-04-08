import React from 'react';

import Row from "antd/lib/row";

// import child components
import LeftSideOfHeader from "./leftSideOfHeader/leftSideOfHeader";
import RightSideOfHeader from "./rightSideOfHeader/rightSideOfHeader";

// import css
import "./specificShelterHeader.css";

const contributionHeader = (props) => {



    return(
        <Row className="ChooseSpecific" >
            <LeftSideOfHeader />
            <RightSideOfHeader {...props} />
        </Row>
    );
}

export default contributionHeader;
