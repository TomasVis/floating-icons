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
    const someVal = 10;
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
    //determines to which location cards should flow based on which card is in focus
    let ret = this.state.cardInFocus==0 ? this.state.firstCardDimentions:
              this.state.cardInFocus==1 ? this.state.secondCardDimentions:
              this.state.cardInFocus==2 ? this.state.thirdCardDimentions:
              {x:0,y:0} 

  // lets say card in focus nr 2 has  state exp [1,3,4]
let inc =0;
let answ= {};
console.log(this.state.cardInFocus)
let arr = [[0,1,2,3],[1,3],[1,4]];

if(!arr[0].includes(cardThatCalledThis)){
 // console.log("not includes "+cardThatCalledThis)
}
else{

arr[0].forEach(x =>{

 answ = cardThatCalledThis == x ? ret = {...ret,x:ret.x+inc} : ret;
 inc+=50;
return answ
})

}



    // adds arbitrary number to x axis for individual icon alignment
/*    let ans = cardThatCalledThis == 2 ? ret = {...ret,x:ret.x+50}:
              cardThatCalledThis == 3 ? ret = {...ret,x:ret.x+100}:
              cardThatCalledThis == 4 ? ret = {...ret,x:ret.x+150}:
              ret*/

              
              //console.log(ret)
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
      <div>

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

       
        <Comp1 iconNr= {0} startPos={this.state.startPos[0]} destination={this.getIconPositions(0)} cardInFocus={this.state.cardInFocus}  aProp = {this.state.isOnHover} delay = {100}/>
        <Comp1 iconNr= {1} startPos={this.state.startPos[1]} destination={this.getIconPositions(1)} cardInFocus={this.state.cardInFocus}  aProp = {this.state.isOnHover} delay = {200}/>
        <Comp1 iconNr= {2} startPos={this.state.startPos[2]} destination={this.getIconPositions(2)} cardInFocus={this.state.cardInFocus}  aProp = {this.state.isOnHover} delay = {300}/>
        <Comp1 iconNr= {3} startPos={this.state.startPos[3]} destination={this.getIconPositions(3)} cardInFocus={this.state.cardInFocus}  aProp = {this.state.isOnHover} delay = {400}/>



        
      </div>
    );
  }
}

export default App;
