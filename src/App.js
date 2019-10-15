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
      startPos:[[0,0,0.5],[110,400,0.5],[1100,100,0.5],[1200,800,0.5]],
      cardInFocus: 0,
      dimensions1:{}
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

    this.setState({isOnHover:!this.state.isOnHover,cardInFocus:0})
  }

  handleResize() {
    const getBoundingClientRect = (element) => { const {top, right, bottom, left, width, height, x, y} = element.getBoundingClientRect();
    return {top, right, bottom, left, width, height, x, y} }
    if (this.firstCardReff.current) {      
      const dimentions =  getBoundingClientRect(this.firstCardReff.current);
      this.setState({
        dimentions:dimentions
      })    
    }
    if (this.secondCardReff.current) {      
      const dimentions =  getBoundingClientRect(this.secondCardReff.current);
      this.setState({
        dimentions1:dimentions
      })    
    }
  }

  componentDidMount() {
    const getBoundingClientRect = (element) => { const {top, right, bottom, left, width, height, x, y} = element.getBoundingClientRect();
    return {top, right, bottom, left, width, height, x, y} }
if (this.firstCardReff.current) {      
      const dimentions =  getBoundingClientRect(this.firstCardReff.current);
      this.setState({
        dimentions:dimentions
      })    
    }
    if (this.secondCardReff.current) {      
      const dimentions =  getBoundingClientRect(this.secondCardReff.current);
      this.setState({
        dimentions1:dimentions
      })    
    }
    window.addEventListener('resize', this.handleResize)
  }

  render() {


//console.log(this.state);
console.log(this.state.cardInFocus);
    return (
      <div>

        <div 
          id={1} 
          className="wrapper"
          ref={this.firstCardReff}                      
          onMouseEnter={this.handleMouseEnter} 
          onMouseLeave={this.handleMouseLeave}          
        >
          <Card id={1}  cardInFocus={this.state.cardInFocus} aProp = {this.state.isOnHover} />            
        </div>

        <div 
          id={2} 
          className="wrapper"
          ref={this.secondCardReff}                      
          onMouseEnter={this.handleMouseEnter} 
          onMouseLeave={this.handleMouseLeave}          
        >
          <Card id={2}  cardInFocus={this.state.cardInFocus} aProp = {this.state.isOnHover} />            
        </div>
       
        <Comp1 startPos={this.state.startPos[0]} dimentions={this.state.dimentions} cardInFocus={this.state.cardInFocus}  aProp = {this.state.isOnHover} delay = {100}/>
        <Comp1 startPos={this.state.startPos[1]} dimentions={this.state.dimentions} cardInFocus={this.state.cardInFocus}  aProp = {this.state.isOnHover}  delay = {200}/>
        <Comp1 startPos={this.state.startPos[2]} dimentions={this.state.dimentions1} cardInFocus={this.state.cardInFocus} aProp = {this.state.isOnHover}  delay = {300}/>
        <Comp1 startPos={this.state.startPos[3]} dimentions={this.state.dimentions1} cardInFocus={this.state.cardInFocus} aProp = {this.state.isOnHover}  delay = {400}/>
        
      </div>
    );
  }
}

export default App;
