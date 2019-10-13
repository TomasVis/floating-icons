import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import { Spring  } from 'react-spring/renderprops';
import Comp1 from './components/Comp1';
import Card from './components/Card';


//TODO
//Handle multiple cards
//Make icons fly from dynamic positions
//determine which cards need to fly and which dont
//Make cards fly to dynamic positions


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id:null,
      isOnHover:false,
      dimentions:{},
      startPos:[[0,0,0.5],[110,400,0.5],[1400,100,0.5],[1200,800,0.5]],
      cardInFocus: "",
      dimensions1:""
    };
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
    this.handleResize = this.handleResize.bind(this);

    this.firstCardReff = React.createRef();
    this.secondCardReff = React.createRef();
  }

  handleMouseEnter(e){
   // console.log( e.currentTarget.id)
    this.setState({isOnHover:!this.state.isOnHover,cardInFocus:e.currentTarget.id})
  }
  handleMouseLeave(e){

    this.setState({isOnHover:!this.state.isOnHover,cardInFocus:""})
  }

  handleResize() {
    if (this.firstCardReff.current) {
      const getBoundingClientRect = (element) => { const {top, right, bottom, left, width, height, x, y} = element.getBoundingClientRect();
      return {top, right, bottom, left, width, height, x, y} }

      const dimentions =  getBoundingClientRect(this.firstCardReff.current);
      this.setState({
        dimentions:dimentions
      })
  
  
    }
  }

  componentDidMount() {
       if (this.firstCardReff.current) {
      const getBoundingClientRect = (element) => { const {top, right, bottom, left, width, height, x, y} = element.getBoundingClientRect();
      return {top, right, bottom, left, width, height, x, y} }

      const dimentions =  getBoundingClientRect(this.firstCardReff.current);
      this.setState({
        dimentions:dimentions
      })
  
  
  }
    window.addEventListener('resize', this.handleResize)
  }

  render() {


//console.log(this.state.dimentions);
console.log(this.state.cardInFocus);
    return (
      <div>

        <div 
          id="firstCard" 
          className="wrapper"
          ref={this.firstCardReff}                      
          onMouseEnter={this.handleMouseEnter} 
          onMouseLeave={this.handleMouseLeave}          
        >
          <Card aProp = {this.state.isOnHover} />            
        </div>

        <div 
          id="secondCard" 
          className="wrapper"
          ref={this.secondCardReff}                      
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
