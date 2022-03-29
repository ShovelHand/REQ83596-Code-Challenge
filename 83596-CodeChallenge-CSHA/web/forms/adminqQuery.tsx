import * as React from "react";
import { useState, useEffect } from "react";
import { isPropertySignature } from "typescript";

interface Props {
    reportCallback;
}

const AdminQuery: React.FC<any> = ({reportCallback}) => {
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
            reportCallback(JSON.parse(xhr.response));
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
        </form>
    );
}

export default AdminQuery;