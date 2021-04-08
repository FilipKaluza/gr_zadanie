import React from 'react';

// import child components
import NavProgress from "./navProgress/navProgress";

import Row from "antd/lib/row"
import Col from "antd/lib/col";

import Dog from "../../assets/images/dog_screen.png"

// import css
import "./Layout.css";

const Layout = (props) => {


    return(
        <Row className="Layout" >
            <Col span={14} >
                <div className="NavProgress">
                    <NavProgress />
                </div>
                {props.children}
            </Col>
            <Col span={10} className="DogImage">
                <img src={Dog} alt="DogImage" />
            </Col>
        </Row> 
    );
};

export default Layout;