import React from "react";
import random from "lodash.random";

class Square extends React.Component {
    constructor() {
        super();

        this.state = {
            zoomLevel: "small",
        }
    }

    getColor = () => {
        let opacity = this.props.elevation / 100;
        return `rgba(0,0,0,${opacity})`;
    }

    getStyle = () => {
        return {
            height: this.props.size,
            width: this.props.size,
            backgroundColor: this.getColor(),
            display: "inline-block"
        };
    }

    render() {
        return(
            <div style={this.getStyle()}></div>
        );
    }
}

export default Square;
