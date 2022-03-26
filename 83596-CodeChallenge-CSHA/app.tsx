import LongLatInput from "./web/components/ui/longLatInput"
declare var require: any

var React = require('react');
var ReactDOM = require('react-dom');

export class Hello extends React.Component {
    render() {
        return (

            <LongLatInput/>
        );
    }
}

ReactDOM.render(<Hello />, document.getElementById('root'));
