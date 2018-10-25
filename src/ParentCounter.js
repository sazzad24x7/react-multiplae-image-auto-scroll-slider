import React, { Component } from 'react';
import Counter from './Counter'

class ParentCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {counter: null};
  }
  
  render() {
    if (this.state.counter) {
      return <Counter 
               counter={this.state.counter}
               onExit={() => this.setState({counter:null})}
               />
    } else {
      return (
        <div>
          <h2>Pick a Counter</h2>
          <button onClick={() => this.setState({counter:'simplest'})}  >Simplest</button><br/>
          <button onClick={() => this.setState({counter:'double'})}>Double</button><br/>
        </div>
      )
    }
  }
}

export default ParentCounter;
