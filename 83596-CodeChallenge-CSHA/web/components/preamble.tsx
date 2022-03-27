import * as React from "react";

class Preamble extends React.Component<{}> {
    render() {
        return (
            <div>
                <h3>Find your Community Health Service Area by coordinates</h3>
                <p>For example, (48.4251378, -123.3646335) will return "Downtown Victora/Vic West" </p>
                <p>Coordinate info for a location can be found by right-clicking in Goolge Maps</p>
            </div>
        );
    }
}

export default Preamble;