import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import { Spring  } from 'react-spring/renderprops';
import Comp1 from './components/Comp1';
import Card from './components/Card';





class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      id:null,
      isOnHover:false,
      dimentions:{},
      startPos:[[0,0,0.5],[110,400,0.5],[1100,100,0.5],[1200,800,0.5]],
      cardInFocus: -1,
      dimensions1:{},
      firstCardDimentions:{},
      secondCardDimentions:{},
      thirdCardDimentions:{},
      iconsForEachCard:[[1,2,3,4],[1,3,4],[1,4]]
    };

    this.handleResize = this.handleResize.bind(this);
    this.getIconPositions = this.getIconPositions.bind(this);
    this.getBoundingClientRect = this.getBoundingClientRect.bind(this);
    this.handleMouseOver = this.handleMouseOver.bind(this);
    this.handleMouseOut = this.handleMouseOut.bind(this);

    this.firstCardReff = React.createRef();
    this.secondCardReff = React.createRef();
    this.thirdCardReff = React.createRef();

  }

  handleMouseOver(e){
   // console.log( e.currentTarget.id)
    this.setState({isOnHover:true,cardInFocus:e.currentTarget.id})
  } 
   handleMouseOut(e){

    this.setState({isOnHover:false,cardInFocus:-1})
  } 

  getIconPositions(cardThatCalledThis){
    //console.log(cardThatCalledThis)
    
    let ret = this.state.cardInFocus==0 ? this.state.firstCardDimentions:   //determines to which location cards should flow based on which card is in focus
              this.state.cardInFocus==1 ? this.state.secondCardDimentions:
              this.state.cardInFocus==2 ? this.state.thirdCardDimentions:
              {x:0,y:0} 

    let arr = this.state.cardInFocus==0 ? [0,1,2,3]:                        // arr represents array that controlls wheather the icon should go to the card, or stay in its initial position
              this.state.cardInFocus==1 ? [0,2,3]:                          // each number in array represents the icon which needs to know where to go
              this.state.cardInFocus==2 ? [0,1,3]:
              [0,1,2,3]


let inc =0;                                                                 // this value will be incremented and added to the x value to align icons
let answ= {};
//console.log(this.state.cardInFocus)
//let arr = [[0,1,2,3],[1,3],[1,4]];

//console.log("cardThatCalledThis "+cardThatCalledThis)
if(!arr.includes(cardThatCalledThis)){                                      // if icon number is not in the array the icon gets destination of its initial position
  //console.log("not includes "+cardThatCalledThis)
  let x = this.state.startPos[cardThatCalledThis][0]
  let y = this.state.startPos[cardThatCalledThis][1]
   answ = ret = {x:x,y:y} 

}
else{                                                                        // adds arbitrary number to x axis for individual icon alignment
  arr.forEach(x =>{
    answ = cardThatCalledThis == x ? ret = {...ret,x:ret.x+inc} : ret;
    inc+=50;
    return answ
  })

}

   return answ

  }
  // converts boundingClient object to normal object
  getBoundingClientRect (element)  { const {top, right, bottom, left, width, height, x, y} = element.getBoundingClientRect();
    return {top, right, bottom, left, width, height, x, y} 
  }

  handleResize() {  
      this.setState({
        firstCardDimentions:this.getBoundingClientRect(this.firstCardReff.current),
       secondCardDimentions:this.getBoundingClientRect(this.secondCardReff.current),
        thirdCardDimentions:this.getBoundingClientRect(this.thirdCardReff.current)
      })    
  }

  componentDidMount() {
      this.setState({
        firstCardDimentions:this.getBoundingClientRect(this.firstCardReff.current),
       secondCardDimentions:this.getBoundingClientRect(this.secondCardReff.current),
         thirdCardDimentions:this.getBoundingClientRect(this.thirdCardReff.current)
      }) 
    window.addEventListener('resize', this.handleResize)
  }

  render() {


//console.log(this.state);
/*console.log(this.state.dimentions);
console.log(this.state.firstCardDimentions);
console.log(this.state.secondCardDimentions);
console.log(this.state.thirdCardDimentions);*/
    return (
      <div className="mainContainer">

        <div 
          id={0} 
          className="wrapper"
          ref={this.firstCardReff}                           
          onMouseOver={this.handleMouseOver}          
          onMouseOut={this.handleMouseOut}          
        >
          <Card id={0}  cardInFocus={this.state.cardInFocus} aProp = {this.state.isOnHover} />            
        </div>

       <div 
          id={1} 
          className="wrapper"
          ref={this.secondCardReff}                           
          onMouseOver={this.handleMouseOver}          
          onMouseOut={this.handleMouseOut}          
        >
          <Card id={1}  cardInFocus={this.state.cardInFocus} aProp = {this.state.isOnHover} />            
        </div>
        
        
        <div 
          id={2} 
          className="wrapper"
          ref={this.thirdCardReff}                           
          onMouseOver={this.handleMouseOver}          
          onMouseOut={this.handleMouseOut}          
        >
          <Card id={2}  cardInFocus={this.state.cardInFocus} aProp = {this.state.isOnHover} />            
        </div>
        <div 
          id={3} 
          className="wrapper"
          ref={this.thirdCardReff}                           
          onMouseOver={this.handleMouseOver}          
          onMouseOut={this.handleMouseOut}          
        >
          <Card id={3}  cardInFocus={this.state.cardInFocus} aProp = {this.state.isOnHover} />            
        </div>
        <div 
          id={4} 
          className="wrapper"
          ref={this.thirdCardReff}                           
          onMouseOver={this.handleMouseOver}          
          onMouseOut={this.handleMouseOut}          
        >
          <Card id={4}  cardInFocus={this.state.cardInFocus} aProp = {this.state.isOnHover} />            
        </div>

       
        <Comp1 iconNr= {0} startPos={this.state.startPos[0]} destination={this.getIconPositions(0)} cardInFocus={this.state.cardInFocus}  aProp = {this.state.isOnHover} delay = {100}/>
        <Comp1 iconNr= {1} startPos={this.state.startPos[1]} destination={this.getIconPositions(1)} cardInFocus={this.state.cardInFocus}  aProp = {this.state.isOnHover} delay = {200}/>
        <Comp1 iconNr= {2} startPos={this.state.startPos[2]} destination={this.getIconPositions(2)} cardInFocus={this.state.cardInFocus}  aProp = {this.state.isOnHover} delay = {300}/>
        <Comp1 iconNr= {3} startPos={this.state.startPos[3]} destination={this.getIconPositions(3)} cardInFocus={this.state.cardInFocus}  aProp = {this.state.isOnHover} delay = {400}/>



        
      </div>
    );
  }
}

export default App;
