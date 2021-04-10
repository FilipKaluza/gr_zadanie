import React from 'react';

import NavLine from "../../../assets/images/NavIndicatorLine.svg";
import NavLineActive from "../../../assets/images/NavProgressActive.svg";

// import css
import "./navProgress.css";

const NavProgress = (props) => {

    let actualUrl = window.location.pathname


    return(
        <div className="NavProgress" >
            <img src={ actualUrl === "/" ? NavLineActive : NavLine } alt="NavLine" />
            <img src={ actualUrl === "/contactdata" ? NavLineActive : NavLine } alt="NavLine" />
            <img src={ actualUrl === "/checkout" ? NavLineActive : NavLine } alt="NavLine" />
        </div>
    );
};

export default React.memo(NavProgress);
