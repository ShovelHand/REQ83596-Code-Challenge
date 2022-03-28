import * as React from "react";
import { useState } from "react";

const AdminReport: React.FC<any> = ({}) => {
    
    const getAdminReport = (event) => {
        event.preventDefault();
        const url: string = `/logging`;
        const xhr = new XMLHttpRequest();
        xhr.open('get', url, true);
        xhr.onreadystatechange = () => {
            switch (xhr.status) {
                case 200:
                    console.log(xhr.response);
                    break;
                case 400:
                    console.error(xhr.response);
                    break;
            }
        }
        xhr.onload = () => {

        }
        xhr.send();
    }

    return(
        <form onSubmit={getAdminReport}>
            <h3>Admin Section</h3>
            <p>Are you an admin? Honour system! Click the button to get a report.</p>
            <input type="submit" value="Find Name" />
        </form>
    );
}

export default AdminReport;