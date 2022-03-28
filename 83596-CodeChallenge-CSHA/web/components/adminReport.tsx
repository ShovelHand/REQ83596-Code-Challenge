import * as React from "react";
import { useState, useEffect } from "react";


export interface Props {
    reportData: any;
}


const AdminReport: React.FC<any> = (props) => {
    return (
        <div>
        {props.reportData ? (<p>Total Queries: <strong>{props.reportData.count}</strong><br/>
        Last five CHSA names querried: <strong>{props.reportData.lastFiveNames}</strong></p>
        ) : (
            <p>Submit coordinates within Greater Victoria to see the corresponding Community Health Service Area.)</p>)
        }
    </div>
  );

}

export default AdminReport;