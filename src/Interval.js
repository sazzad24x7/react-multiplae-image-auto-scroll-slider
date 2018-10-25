import React, {Component} from 'react'

class Interval extends Component{
    constructor(props) {
        super(props);
        this.state = {number: 1};
      }
      
      componentDidMount() {
        this.interval = setInterval(() => {
          
          
        }, 1000);
      }
      
      componentWillUnmount() {
        clearInterval(this.interval);
      }
      
      render() {
        return (
          <div>
            <h1>{this.state.number}</h1>
            <button onClick={this.props.onExit}>Exit</button>
          </div>
        )
      }
}

export default Interval