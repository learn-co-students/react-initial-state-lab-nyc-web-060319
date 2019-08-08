// your Bomb code here!

// ts initial state should have a property called secondsLeft.
// The initial value of secondsLeft is set by passing in an initialCount prop to the Bomb component. 
// Don't forget to pass the argument props into the constructor (i.e., constructor(props)).
// It should render the text '<SECONDS_LEFT> seconds left before I go boom!', 
// where <SECONDS_LEFT> is the value of secondsLeft.
// // If secondsLeft equals 0, it should render 'Boom!' instead


//Bomb recevies the initialCount prop from index, starts as 120
import React from 'react'
class Bomb extends React.Component {
    
    // constructor(){

        // }
        
        state = {
            secondsLeft : this.props.initialCount
        }
        
        
        render(){
             
        // <button onclick={ () => { this.setState( () => {secondsLeft : 0} ) } }>Decrease seconds to 0</button>
            
        if (this.state.secondsLeft){
            return `${this.props.initialCount} seconds left before I go boom!`
         } else {
            return 'Boom!'
        }
    }
}
 export default Bomb