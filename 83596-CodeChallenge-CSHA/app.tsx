
import QueryForm from "./web/forms/queryForm";
import Preamble from "./web/components/preamble";
declare var require: any

var React = require('react');
var ReactDOM = require('react-dom');

export class Hello extends React.Component {
    render() {
        return (
            <div>
                <Preamble/>
                <QueryForm />
            </div>
        );
    }
}

ReactDOM.render(<Hello />, document.getElementById('root'));
