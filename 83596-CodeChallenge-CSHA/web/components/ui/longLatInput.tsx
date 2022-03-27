import * as React from "react";
import { useState } from "react";


interface Lables {
    label: string;
}

const LongLatInput: React.Component<Lables> = (props) => {
    const[value, setValue] = useState<any>("");

    const { label } = props;
    return (
            <div>
                <label>
                {label}:
                    <input type="text" value={value} /*onChange={this.handleChange}*/ />
                </label>
            </div>
        );
    
}

export default LongLatInput;