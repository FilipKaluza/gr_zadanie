import React from 'react';

import NavLine from "../../../assets/images/NavIndicatorLine.svg";
import NavLineActive from "../../../assets/images/NavProgressActive.svg";

// import css
import "./navProgress.css";

const NavProgress = (props) => {

    return(
        <div className="NavProgress" >
            <img src={NavLineActive} alt="NavLine" />
            <img src={NavLine} alt="NavLine" />
            <img src={NavLine} alt="NavLine" />
        </div>
    );
};

export default NavProgress;
