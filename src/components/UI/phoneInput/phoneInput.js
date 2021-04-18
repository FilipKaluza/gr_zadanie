import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

import Row from "antd/lib/row";
import Col from "antd/lib/col";

// import icons
import { CheckCircleOutlined, CloseCircleOutlined } from '@ant-design/icons';

const PhoneInputComponent = (props) => {
    
    return(
        <Row className="Form-group-mobile">
            <Col span={20}>
                <label > Telefónne číslo </label> (Nepovinné pole)
                <div className="input">
                    <PhoneInput dropdownStyle={{ margin: "0"}} inputStyle={{ width: "225px", border: "none" }} value={props.value} country={"sk"} onlyCountries={["sk", "cz"]} onChange={props.changed} autoFormat={true} />
                </div>
            </Col>
            {props.touched ?
                <Col span={4} className="InputValidityWrapper" >
                    { props.isValid ? <div className="InputValid"> <CheckCircleOutlined />  </div> : <div className="InputInvalid" > <CloseCircleOutlined /> </div>  }
                </Col> : null }
        </Row>

    );
};

export default PhoneInputComponent;