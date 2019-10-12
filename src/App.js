import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import { Spring  } from 'react-spring/renderprops';
import Comp1 from './components/Comp1';
import Card from './components/Card';
//use library, that listens to screen resize





class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id:null,
      isOnHover:false,
      dimentions:{},
      startPos:[[0,0,0.5],[110,400,0.5],[1400,100,0.5],[1200,800,0.5]],
      cardInFocus: ""
    };
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);

    this.myRef = React.createRef();
  }

  handleMouseEnter(e){
   // console.log( e.currentTarget.id)
    this.setState({isOnHover:!this.state.isOnHover,cardInFocus:e.currentTarget.id})
  }
   handleMouseLeave(e){

    this.setState({isOnHover:!this.state.isOnHover,cardInFocus:""})
  }

    componentDidMount() {
    if (this.myRef.current) {
      const getBoundingClientRect = (element) => { const {top, right, bottom, left, width, height, x, y} = element.getBoundingClientRect();
      return {top, right, bottom, left, width, height, x, y} }

      const dimentions =  getBoundingClientRect(this.myRef.current);
      this.setState({
        dimentions:dimentions
      })
  
  
}
  }

  render() {

console.log(this.state.dimentions);
    return (
      <div>



          <div id="firstCard" className="wrapper"
            ref={this.myRef}                      
            onMouseEnter={this.handleMouseEnter} 
            onMouseLeave={this.handleMouseLeave}          
          >

            <Card aProp = {this.state.isOnHover} />
          </div>

          
        <Comp1 startPos={this.state.startPos[0]} dimentions={this.state.dimentions}  aProp = {this.state.isOnHover} delay = {100}/>
        <Comp1 startPos={this.state.startPos[1]} dimentions={this.state.dimentions}  aProp = {this.state.isOnHover}  delay = {200}/>
        <Comp1 startPos={this.state.startPos[2]} dimentions={this.state.dimentions}  aProp = {this.state.isOnHover}  delay = {300}/>
        <Comp1 startPos={this.state.startPos[3]} dimentions={this.state.dimentions}  aProp = {this.state.isOnHover}  delay = {400}/>
        
      </div>
    );
  }
}

export default App;
{/*<div     className = "withHover"
        //{this.state.isOnHover? className = "onHover"}
          onMouseEnter={this.handleMouseEnter} 
          //style={{backgroundColor: "red",width:`${this.state.isOnHover? "200" : 100}px`,height:`${this.state.isOnHover? 200 : 100}px`}}
          style={{backgroundColor: "red",width:"200px",height:"200px",
            boxShadow:`${this.state.isOnHover? "10px 11px 5px 0px rgba(0,0,0,0.75)" : ""}`,
            transform:`${this.state.isOnHover?"scale(1.2)":""}`
          }}
          onMouseLeave={this.handleMouseEnter}
          >
          <Card/>
        </div>*/}