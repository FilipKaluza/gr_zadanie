import React from 'react';

import Row from "antd/lib/row";
import Col from "antd/lib/col";

// import icons
import { CheckCircleOutlined, CloseCircleOutlined } from '@ant-design/icons';

import "./input.scss";

const input = (props) => {

    let requiredOrNot = "(Nepovinné pole)"
    if (props.required) {
        requiredOrNot = "(Povinné pole)"
    }

    let inputElement = <input className="input" {...props.elementConfig} value={props.value} onChange={props.changed} />;

    return(
        <Row className="Form-group" >
            <Col span={20}>
                <label > {props.label} </label>  <span > {requiredOrNot} </span>
                {inputElement}
            </Col>
            {props.touched ?
                <Col className="InputValidityWrapper" span={4}>
                    {  props.isValid ? <div className="InputValid"> <CheckCircleOutlined />  </div> : <div className="InputInvalid" > <CloseCircleOutlined /> </div>  }
                </Col> : null
            }
        </Row>
        
    )
}

export default input;