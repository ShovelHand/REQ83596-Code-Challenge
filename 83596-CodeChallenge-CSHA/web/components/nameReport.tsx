import * as React from "react";
import { useState, useEffect } from "react";


export interface Props {
    reportData: string;
}

const NameReport: React.FC<any> = (props) => {
    const [nameValue, setValue] = useState<string>("")
    useEffect(() => {

        console.log("detected");
        

    }, [nameValue])

    return (
        <div>
            {props.reportData ? (<p>These coordinates fall within the <strong>{props.reportData}</strong> Community Health Service Area</p>
            ) : (
                <p>Submit coordinates within Greater Victoria to see the corresponding Community Health Service Area.)</p>)
            }
        </div>
  );

}

export default NameReport;