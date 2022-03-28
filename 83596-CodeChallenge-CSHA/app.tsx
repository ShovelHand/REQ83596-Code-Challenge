
import QueryForm from "./web/forms/queryForm";
import Preamble from "./web/components/preamble";
import NameReport from "./web/components/nameReport";
import AdminReport from "./web/forms/adminReport";
import * as React from "react";
import { useState } from "react";

declare var require: any

var React = require('react');
var ReactDOM = require('react-dom');

const Main: React.FC<any> = ({

}: any) => {
    const [report, setReport] = useState<string>("");
    const [name, setName] = useState<string>("");

    const displayQueryResult = (queryResult) => {
        if (queryResult) {
            const data = JSON.parse(queryResult);
            setName(data.features[0].properties.CMNTY_HLTH_SERV_AREA_NAME);

            const url = "/logging?name=" + data.features[0].properties.CMNTY_HLTH_SERV_AREA_NAME;
            const xhr = new XMLHttpRequest();
            xhr.open('post', url, true);
            xhr.onreadystatechange = () => {
                switch (xhr.status) {
                    case 200:
                        
                        break;
                    case 400:

                        break;
                }
            }
            xhr.onload = () => {

            }
            xhr.send();
        }
    }

        return (
            <div>
                <Preamble />
                <QueryForm reportCallback={displayQueryResult} />
                <NameReport reportData={name}/>
                <AdminReport/>
            </div>
        );
    
}

ReactDOM.render(<Main />, document.getElementById('root'));
