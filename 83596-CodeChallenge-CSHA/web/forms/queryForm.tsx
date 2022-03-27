import * as React from "react";
import { useState } from "react";

interface Lables {
    reportCallback;
}

const QueryForm: React.FC<any> = ({reportCallback}) => {
    const [latVal, setLat] = useState<any>("48.45862773341286");
    const [longVal, setLong] = useState<string>("-123.36126294595441");

    const onReceive = (data: string) => {
        reportCallback(data);   
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const url: string = `https://openmaps.gov.bc.ca/geo/pub/ows?
service=WFS&version=1.0.0
&request=GetFeature&typeName=pub%3AWHSE_ADMIN_BOUNDARIES.BCHA_CMNTY_HEALTH_SERV_AREA_SP&srsname=EPSG%3A4326
&cql_filter=INTERSECTS(SHAPE%2CSRID%3D4326%3BPOINT(${longVal}+${latVal}))
&propertyName=CMNTY_HLTH_SERV_AREA_CODE%2CCMNTY_HLTH_SERV_AREA_NAME&outputFormat=application%2Fjson`;
        //const url: string = "https://";
        const xhr = new XMLHttpRequest();
        xhr.open('post', url, true);
        xhr.onreadystatechange = () => {
            switch (xhr.status) {
                case 200:
                    onReceive(xhr.response);
                    break;
                case 400:
       
                    break;
            }
        }
        xhr.onload = () => {

        }
        xhr.send();
        console.log("form submit: " + longVal + " " + latVal);
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>
                    Latitude:
                    <input type="number" value={latVal || ''} onChange={(e) => {
                        setLat(e.target.value);
                    }
                    } />
                </label>
            </div>
            <div>
                <label>
                    Longitude:
                    <input type="number" value={longVal || ''} onChange={(e) => {
                        setLong(e.target.value);
                    }
                    } />
                </label>
            </div>
            <input type="submit" value="Submit" />
        </form>
    );
 }

export default QueryForm;