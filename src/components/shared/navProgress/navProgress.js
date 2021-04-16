import React from 'react';

import { ReactComponent as NavLine} from "../../../assets/images/navProgressLine.svg";
import { ReactComponent as NavLineActive} from "../../../assets/images/navProgressActiveLine.svg";

// import css
import "./navProgress.scss";

const NavProgress = (props) => {

    let actualUrl = window.location.pathname


    return(
        <div className="NavProgress" >
            { actualUrl === "/" ? <NavLineActive /> : <NavLine />}
            { actualUrl === "/contact" ? <NavLineActive /> : <NavLine />}
            { actualUrl === "/checkout" ? <NavLineActive /> : <NavLine />} 
        </div>
    );
};

export default React.memo(NavProgress);
