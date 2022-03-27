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
          
        </div>
  );

}

export default NameReport;