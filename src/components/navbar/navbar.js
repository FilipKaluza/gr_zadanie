import React from 'react';

import FBICon from "../../assets/images/FB.svg"
import IGIcon from "../../assets/images/IG.svg";

// import css
import "./navbar.scss";

const navbar = () => {

    return(
        <div className="Navbar" >
            <p className="NavDes"> Nadácia Good Boy</p>
            <div className="SocSites" >
                <div className="FBIcon">
                    <img  src={FBICon} alt="FBIcon" />
                </div>
                <div className="IGIcon" >
                    <img  src={IGIcon} alt="IGIcon" />
                </div>
            </div>
        </div>
    );    
};

export default navbar;