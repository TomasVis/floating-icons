import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Spring  } from 'react-spring/renderprops';
import Comp1 from './components/Comp1';





class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOnHover:false,
      width: 100,
      className: "withHover"
    };
    this.handleMouseEnter = this.handleMouseEnter.bind(this)
  }
  handleMouseEnter(){
    this.setState({isOnHover:!this.state.isOnHover})
  }

  render() {
    return (
      <div>

        <div     className = "withHover"
        //{this.state.isOnHover? className = "onHover"}
          onMouseEnter={this.handleMouseEnter} 
          //style={{backgroundColor: "red",width:`${this.state.isOnHover? "200" : 100}px`,height:`${this.state.isOnHover? 200 : 100}px`}}
          style={{backgroundColor: "red",width:"200px",height:"200px",
            boxShadow:`${this.state.isOnHover? "10px 11px 5px 0px rgba(0,0,0,0.75)" : ""}`,
            transform:`${this.state.isOnHover?"scale(1.2)":""}`
          }}
          onMouseLeave={this.handleMouseEnter}
          >
          
        </div>
          
<Comp1 x={400} y={200} aProp = {this.state.isOnHover} delay = {10} op={1}/>
          <Comp1 x={300} y={400} aProp = {this.state.isOnHover} op={1} delay = {300}/>
        </div>
    );
  }
}

export default App;
