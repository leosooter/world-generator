import React from "react";
import Square from "./square";

const zoomMapper = {
    small: 10,
    medium: 100,
    large: 250
}


class Grid extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            zoomLevel: "small",
            grid: this.generateGrid("small")
        }
    }

    generateGrid = (zoomLevel) => {
        const {gridArray} = this.props;
        console.log('gridArray', gridArray);

        const numRows = Math.ceil(Math.sqrt(gridArray.length));
        const squaresPerRow = Math.ceil(gridArray.length / numRows);

        console.log('numRows', numRows);
        console.log('squaresPerRow', squaresPerRow);


        let gridRows = [];
        let gridIndex = 0;

        for (let rowCount = 0; rowCount < numRows; rowCount++) {
            let row = [];
            for (let squareCount = 0; squareCount < squaresPerRow; squareCount++) {
                console.log('gridIndex', gridIndex, gridArray[gridIndex]);
                if (gridArray[gridIndex]) {
                    row.push(<Square elevation={gridArray[gridIndex].elevation} size={zoomMapper[zoomLevel]}/>);
                }

                gridIndex++;
            }
            gridRows.push(<div className="gridRow">{row}</div>);
        }

        console.log('gridRows', gridRows);

        return gridRows;

    }

    render() {
        return this.state.grid;
    }
}

export default Grid;
