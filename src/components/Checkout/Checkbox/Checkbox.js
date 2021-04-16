import React from 'react';

import { ReactComponent as CheckboxIndicator} from "../../../assets/images/customCheckboxIndicator.svg";

export default function Chceckbox({checked, onChange, label}) {

    return (
        <div className="checkbox">
            <div className="border" onClick={() => onChange(!checked)}  >
                <CheckboxIndicator className={`indicator ${checked ? "checked" : ""}`} />
            </div>
            <div className="label" > {label} </div>
        </div>
    );
};

