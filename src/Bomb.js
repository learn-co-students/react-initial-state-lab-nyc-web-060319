import React, { Component } from 'react';

class Bomb extends Component {

  constructor(props) {
    super(props)
    this.state = {
      secondsLeft: this.props.initialCount
    }
  }

  render() {
    let returnStatement
    if (this.state.secondsLeft === 0) {
      returnStatement = "Boom!"
    }
    else {
      returnStatement = <h1>{this.state.secondsLeft} seconds left before I go boom!</h1>
    }
    return returnStatement
  }

}

export default Bomb
