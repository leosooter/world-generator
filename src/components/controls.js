import React from "react";

class Controls extends React.Component {

    cycleRain = () => {
        console.log('Cycle Rain');

    }

    render() {
        return(
            <button onClick={this.cycleRain}>Rain</button>
        )
    }
}


export default Controls;
