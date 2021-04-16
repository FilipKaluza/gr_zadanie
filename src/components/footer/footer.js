import React from 'react';

import Row from "antd/lib/row";
import Col from "antd/lib/col";

// import logo 
import { ReactComponent as LogoImage} from "../../assets/images/logoImage.svg";
import { ReactComponent as LogoText} from "../../assets/images/logoText.svg";

const footer = () => {

    return(
        <Row id="Footer">
            <Col xs={24} md={6} className="LogoFooter">
                <LogoImage className="LogoImage" />
                <LogoText className="LogoText" />
            </Col>
            <Col xs={24} md={6} >
                <h1> Nadácia Good boy </h1>
                <p className="Link"> O projekte </p>
                <p className="Link"> Ako na to </p>
                <p className="Link">  Kontakt </p>
            </Col>
            <Col xs={24} md={6} >
                <h1> Nadácia Good boy </h1>
                <p className="FooterText"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in interdum ipsum, sit amet.</p>


            </Col>
            <Col xs={24} md={6} >
                <h1> Nadácia Good boy </h1>
                <p className="FooterText">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in interdum ipsum, sit amet.</p>

            </Col>
        </Row>
    );
};

export default footer;
