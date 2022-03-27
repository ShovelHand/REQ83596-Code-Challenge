
import QueryForm from "./web/forms/queryForm";
import Preamble from "./web/components/preamble";
import NameReport from "./web/components/nameReport";
import * as React from "react";
import { useState } from "react";

declare var require: any

var React = require('react');
var ReactDOM = require('react-dom');

const Main: React.FC<any> = ({

}: any) => {
    const [report, setReport] = useState<string>("");

    const displayQueryResult = (queryresult) => {
        console.log(queryresult);
    }
        return (
            <div>
                <Preamble />
                <QueryForm reportCallback={displayQueryResult} />
                <NameReport/>
            </div>
        );
    
}

ReactDOM.render(<Main />, document.getElementById('root'));
