import * as React from "react";
import { useState, useEffect } from "react";
import { isPropertySignature } from "typescript";

export interface Props {
    totalCount: any;
    lastFiveNames: any;
}

const AdminReport: React.FC<any> = (props) => {
    const [submitting, setSubmitting] = useState(false);

    const getAdminReport = (event) => {
        if (submitting) {
            return;
        }
        setSubmitting(true);
        event.preventDefault();
        const url: string = `/logging`;
        const xhr = new XMLHttpRequest();
        xhr.open('get', url, true);
        xhr.onreadystatechange = () => {
            switch (xhr.status) {
                case 200:
                    
                    break;
                case 400:
                    console.error(xhr.response);
                    break;
            }
        }
        xhr.onload = () => {
            var responseObj = (xhr.response);
            props.totalCount = (responseObj.count);
            props.lastFiveNames = responseObj.lastFiveNames;
        }
        xhr.send();
        setTimeout(() => {
            setSubmitting(false);
        }, 500)
    }

    return(
        <form onSubmit={getAdminReport}>
            <h3>Admin Section</h3>
            <p>Are you an admin? Honour system! Click the button to get a report.</p>
            <input type="submit" value="Get Report" />
            <div>
                {props.reportData ? (<p>Total Queries: <strong>{props.totalCount}</strong><br/>
                Last five CHSA names querried: <strong>{props.lastFiveNames}</strong></p>
                ) : (
                    <p>Submit coordinates within Greater Victoria to see the corresponding Community Health Service Area.)</p>)
                }
            </div>
        </form>
    );
}

export default AdminReport;