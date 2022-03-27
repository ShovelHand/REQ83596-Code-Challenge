import * as React from "react";
import * as ReactDOM from "react-dom";

//import LongLatInput from "../components/ui/longLatInput";
import { useState } from "react";

//class QueryForm extends React.Component < {} > {
//    constructor(props) {
//        super(props);
//     //   this.state = { value: '' };
//        this.handleSubmit = this.handleSubmit.bind(this);
        
//    }
//    const[longVal, setLong] = useState("");
//    const[latVal, setLat] = useState("");
//    handleSubmit(event) {
//        event.preventDefault();
//        const url: string = "https://";
//        const xhr = new XMLHttpRequest();
//        xhr.open('post', url, true);
//        xhr.onreadystatechange = () => {
//            switch (xhr.status) {
//                case 200:
//                    break;
//                case 400:
//                    console.error(xhr.responseText);
//                    break;
//            }
//        }
//        xhr.onload = () => {

//        }
//        xhr.send();
//    }

//    render() {
//        return (
//            <form onSubmit={this.handleSubmit}>
//                <div>
//                    <label>
//                        Longitude:
//                        <input type="text" value={longVal} /*onChange={this.handleChange}*/ />
//                    </label>
//                </div>
//                <div>
//                    <label>
//                        Latitude:
//                        <input type="text" value={latVal} /*onChange={this.handleChange}*/ />
//                    </label>
//                </div>
//                <input type="submit" value="Submit" />
//            </form>
//        );
//    }
//}
const QueryForm: React.FC<any> = ({

}: any) => {
    const [longVal, setLong] = useState<string>("");
    const [latVal, setLat] = useState<any>("");

    const handleSubmit = (event) => {
        event.preventDefault();
        //const url: string = "https://";
        //const xhr = new XMLHttpRequest();
        //xhr.open('post', url, true);
        //xhr.onreadystatechange = () => {
        //    switch (xhr.status) {
        //        case 200:
        //            break;
        //        case 400:
        //            console.error(xhr.responseText);
        //            break;
        //    }
        //}
        //xhr.onload = () => {

        //}
        //xhr.send();
        console.log("form submit: " + longVal + " " + latVal);
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>
                    Longitude:
                    <input type="text" value={longVal || ''} onChange={(e) => {
                        setLong(e.target.value);
                    }
                    } />
                </label>
            </div>
            <div>
                <label>
                    Latitude:
                    <input type="text" value={latVal || ''} onChange={(e) => {
                        setLat(e.target.value);
                    }
                    } />
                </label>
            </div>
            <input type="submit" value="Submit" />
        </form>
    );
 }

export default QueryForm;