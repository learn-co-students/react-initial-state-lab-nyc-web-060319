import React from 'react';
import ReactDOM from 'react-dom';
import ImageSlider from './ImageSlider';
import Bomb from './Bomb';

ReactDOM.render(
  <div>
    <ImageSlider />
    <br></br>
    <Bomb initialCount={120} />
    <br></br>
  </div>,
  document.getElementById('root')
);
  

// ts initial state should have a property called secondsLeft.
// The initial value of secondsLeft is set by passing in an initialCount prop to the Bomb component. Don't forget to pass the argument props into the constructor (i.e., constructor(props)).
// It should render the text '<SECONDS_LEFT> seconds left before I go boom!', where <SECONDS_LEFT> is the value of secondsLeft.
// If secondsLeft equals 0, it should render 'Boom!' instead