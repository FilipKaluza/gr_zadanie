import React from 'react';

import Navbar from "../navbar/navbar";
import Footer from "../footer/footer";

import Row from "antd/lib/row"
import Col from "antd/lib/col";

import Dog from "../../assets/images/dog_screen.png"

// import css
import "./Layout.scss";

const Layout = (props) => {

    return(
        <>
            <Navbar />
            <Row className="Layout" >
                <Col xs={24} md={14} >
                    {props.children}
                </Col>
                <Col xs={24} md={10} className="DogImage">
                    <img src={Dog} alt="DogImage" />
                </Col>
            </Row> 
            <Footer />
        </>
    );
};

export default Layout;