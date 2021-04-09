import React from 'react';

import "./checkout.css";

import CheckboxIndicator from "../../../assets/images/custom_checkbox_indicator.svg";

export default function Chceckbox({checked, onChange, label}) {

    return (
        <div className="checkbox">
            <div className="border" onClick={() => onChange(!checked)}  >
                <img src={CheckboxIndicator} className={`indicator ${checked ? "checked" : ""}`} alt="checkbox indicator" />
            </div>
            <div className="label" > {label} </div>
        </div>
    );
};

