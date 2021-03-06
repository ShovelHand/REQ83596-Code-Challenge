import * as React from "react";
import { useState } from "react";

interface Props {
    reportCallback;
}

const QueryForm: React.FC<any> = ({reportCallback}) => {
    const [latVal, setLat] = useState<any>("48.45862773341286");
    const [longVal, setLong] = useState<string>("-123.36126294595441");
    const [submitting, setSubmitting] = useState(false);

    const onReceive = (data: string) => {
        reportCallback(data);   
    }

    const getData = (long: number, lat: number) => {
        const url: string = `https://openmaps.gov.bc.ca/geo/pub/ows?
service=WFS&version=1.0.0
&request=GetFeature&typeName=pub%3AWHSE_ADMIN_BOUNDARIES.BCHA_CMNTY_HEALTH_SERV_AREA_SP&srsname=EPSG%3A4326
&cql_filter=INTERSECTS(SHAPE%2CSRID%3D4326%3BPOINT(${long}+${lat}))
&propertyName=CMNTY_HLTH_SERV_AREA_CODE%2CCMNTY_HLTH_SERV_AREA_NAME&outputFormat=application%2Fjson`;
        const xhr = new XMLHttpRequest();
        xhr.open('post', url, true);
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
            onReceive(xhr.response);
            return xhr.response;
        }
        xhr.send();
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (submitting) {
            return;
        }
        setSubmitting(true);
        getData(longVal, latVal)
      
        setTimeout(() => {
            setSubmitting(false);
        }, 500)
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
            <input type="submit" value="Find Name" />
        </form>
    );
 }

export default QueryForm;