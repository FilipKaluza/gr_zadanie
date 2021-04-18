import { ReactComponent as FbIcon } from "../../assets/images/fbIcon.svg";
import { ReactComponent as IgIcon } from "../../assets/images/igIcon.svg";

const navbar = () => {

    return(
        <div className="Navbar" >
            <p className="NavDes"> Nadácia Good Boy</p>
            <div className="SocSites" >
                <div className="FBIcon">
                    <FbIcon />
                </div>
                <div className="IGIcon" >
                    <IgIcon  />
                </div>
            </div>
        </div>
    );    
};

export default navbar;