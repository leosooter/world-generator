import React from 'react';
import ReactDOM from 'react-dom';
import random from "lodash.random";
import sample from "lodash.sample";
import compact from "lodash.compact";
import Grid from "./components/grid";
import Controls from "./components/controls";
import {getInitialGrid} from "./helper"


class Game extends React.Component {
  constructor() {
    super();
    console.log('constructor');

    this.state = {
      grid: getInitialGrid(5, 5)
    }
  }

  render() {
    console.log('gridArray', this.state);

    return (
      <div className = "game-wrapper">
        <Controls />
        <Grid gridArray={this.state.grid}/>
      </div>
    );
  }
}


ReactDOM.render(<Game />, document.getElementById('game-screen'));
