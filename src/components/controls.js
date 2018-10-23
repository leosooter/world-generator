import React from "react";
import {rainFrom} from "../helper";

class Controls extends React.Component {

    cycleRain = () => {
        console.log('Cycle Rain');
        console.log('"grid', this.props.grid);

        let start = this.props.grid[0];
        const result = rainFrom(start, 10, "se", this.props.grid);

        console.log('new Grid', this.props.grid, result);
        this.props.updateGrid(result);
    }

    render() {
        return(
            <button onClick={this.cycleRain}>Rain</button>
        )
    }
}


export default Controls;
