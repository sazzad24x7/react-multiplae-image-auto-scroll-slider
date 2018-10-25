import React, { Component } from 'react';
import ParentCounter from './ParentCounter';
import Interval from './Interval';
import './App.css';
import Card from './Card';
import data from './data/data'
import logo from './logo.svg';

// class component
class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      properties: data.properties,
      property: data.properties[0],
    }
  }

  nextProperty = () => {
    const newIndex = this.state.property.index+1;
    console.log('hdklafsjkldfj', this.state.property.index)
    this.setState({
      property: data.properties[newIndex],
    })
  }

  prevProperty = () => {
    const newIndex = this.state.property.index-1;
    this.setState({
      property: data.properties[newIndex],
    })
  }

  autoSlideHandler = () => {
    const newIndex = this.state.property.index+1;
    if(newIndex > 28){
      this.setState({property: data.properties[0]})
    }
    else{
      this.setState({
        property: data.properties[newIndex]
      })
    }
  }
  componentDidMount() {
    this.interval = setInterval(() => {
        this.autoSlideHandler()
        console.log('test ddf',this.state.property.index)
    }, 1000);
  }
  
  componentWillUnmount() {
    clearInterval(this.interval);
  }



  render() {
    const {properties, property} = this.state;
    return (
      <div className="App">
      <ParentCounter />

        <button 
          onClick={() => this.nextProperty()} 
          disabled={property.index === data.properties.length-1}
        >Next</button>

        <button 
          onClick={() => this.prevProperty()} 
          disabled={property.index === 0}
        >Prev</button>

        <div className="page">
            <section>
                <img src={logo} className="App-logo" alt="logo" />
                <h1>Image slideshow React tutorial.</h1>
            </section>

            <div className="col">
              <div className={`cards-slider active-slide-${property.index}`}>
                <div className="cards-slider-wrapper" style={{
                  'transform': `translateX(-${property.index*(100/properties.length)}%)`
                }}>
                  {
                    properties.map(item => <Card  key={item._id} item={item} />)
                  }
                </div>
              </div>
            </div>
        </div>
      </div>
    );
  }
}

export default App;
