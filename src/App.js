//TODO
//make start positions relative to viewport


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
      startPos:[[80,100],[110,400],[80,400],[300,200]],
      cardInFocus: -1,
      firstCardDimentions:{},
      secondCardDimentions:{},
      thirdCardDimentions:{},
      mainContainerDimentions:{},
      firstIconStartPos:{},
      secondIconStartPos:{},
      thirdIconStartPos:{},
      fourthIconStartPos:{},
      windowDimentions:{width:window.innerWidth,height:window.innerHeight}


    };

    this.handleResize = this.handleResize.bind(this);
    this.getIconPositions = this.getIconPositions.bind(this);
/*    this.getBoundingClientRect = this.getBoundingClientRect.bind(this);
*/    this.handleMouseOver = this.handleMouseOver.bind(this);
    this.handleMouseOut = this.handleMouseOut.bind(this);
    this.getIconStartPos = this.getIconStartPos.bind(this);

    this.firstCardReff = React.createRef();
    this.secondCardReff = React.createRef();
    this.thirdCardReff = React.createRef();
    this.mainContainerReff = React.createRef();

  }


  getIconStartPos(iconNum){
    const {  startPos } = this.state;
    let x = startPos[iconNum][0] >=0 ?  startPos[iconNum][0] :  this.state.mainContainerDimentions.width + startPos[iconNum][0] ;
    let y = startPos[iconNum][1] >=0 ? startPos[iconNum][1] : this.state.mainContainerDimentions.height + startPos[iconNum][1] ;
    //let y = this.state.windowDimentions.height;
//console.log(x+" "+y)
//console.log(this.state.startPos[iconNum][0] )


return {x:x,y:y}

  }

  handleMouseOver(e){
   // console.log( e.currentTarget.id)
    this.setState({isOnHover:true,cardInFocus:e.currentTarget.id})
  } 
   handleMouseOut(e){

    this.setState({isOnHover:false,cardInFocus:-1})
  } 

  getIconPositions(cardNr){

    const { cardInFocus, startPos } = this.state;
    const { width, height } = this.state.mainContainerDimentions;
    
    let val = cardInFocus==0 ? this.state.firstCardDimentions:   //determines to which location cards should flow based on which card is in focus
              cardInFocus==1 ? this.state.secondCardDimentions:
              cardInFocus==2 ? this.state.thirdCardDimentions:
              {x:0,y:0} 

    let arr = cardInFocus==0 ? [0,1,2,3]:                        // arr represents array that controlls wheather the icon should go to the card, or stay in its initial position
              cardInFocus==1 ? [2,3]:                          // each number in array represents the icon which needs to know where to go
              cardInFocus==2 ? [0,1,3]:
              [0,1,2,3]


let inc =0;                                                                 // this value will be incremented and added to the x value to align icons
let answ= {};
//console.log(this.state.cardInFocus)
//let arr = [[0,1,2,3],[1,3],[1,4]];

//console.log("cardNr "+cardNr)
if(!arr.includes(cardNr)){                                      // if icon number is not in the array the icon gets destination of its initial position
  //console.log("not includes "+cardNr)
    let x = startPos[cardNr][0] >= 0 ?  startPos[cardNr][0] :  width + startPos[cardNr][0] ;
    let y = startPos[cardNr][1] >= 0 ? startPos[cardNr][1] : height + startPos[cardNr][1] ;
   answ = val = {x:x,y:y} 

}
else{                                                                        // adds arbitrary number to x axis for individual icon alignment
  arr.forEach(x =>{
    answ = cardNr == x ? val = {...val,x:val.x+inc} : val;
    inc+=50;
    return answ
  })

}

   return answ

  }
  // converts boundingClient object to normal object
/*  getBoundingClientRect (element)  { const {top, right, bottom, left, width, height, x, y} = element.getBoundingClientRect();
    return {top, right, bottom, left, width, height, x, y} 
  }*/

  handleResize() {  
     /* this.setState({
        firstCardDimentions:this.getBoundingClientRect(this.firstCardReff.current),
       secondCardDimentions:this.getBoundingClientRect(this.secondCardReff.current),
        thirdCardDimentions:this.getBoundingClientRect(this.thirdCardReff.current),
        mainContainerDimentions:this.getBoundingClientRect(this.mainContainerReff.current),
        windowDimentions:{width:window.innerWidth,height:window.innerHeight}
      }) */
       this.setState({
        firstCardDimentions:{x:this.firstCardReff.current.offsetLeft,y:this.firstCardReff.current.offsetTop},
       secondCardDimentions:{x:this.secondCardReff.current.offsetLeft,y:this.secondCardReff.current.offsetTop},
        thirdCardDimentions:{x:this.thirdCardReff.current.offsetLeft,y:this.thirdCardReff.current.offsetTop},
        mainContainerDimentions:{height:this.mainContainerReff.current.offsetHeight,width:this.mainContainerReff.current.offsetWidth}
/*        windowDimentions:{width:window.innerWidth,height:window.innerHeight}*/
      }) 


  }

  componentDidMount() {
      this.setState({
        firstCardDimentions:{x:this.firstCardReff.current.offsetLeft,y:this.firstCardReff.current.offsetTop},
       secondCardDimentions:{x:this.secondCardReff.current.offsetLeft,y:this.secondCardReff.current.offsetTop},
        thirdCardDimentions:{x:this.thirdCardReff.current.offsetLeft,y:this.thirdCardReff.current.offsetTop},
         mainContainerDimentions:{height:this.mainContainerReff.current.offsetHeight,width:this.mainContainerReff.current.offsetWidth}
/*         windowDimentions:{width:window.innerWidth,height:window.innerHeight}*/
      }) 

/*console.log(this.firstCardReff.current.offsetLeft);
console.log(this.firstCardReff.current.offsetTop);*/
    window.addEventListener('resize', this.handleResize)
  }
  render() {

//console.log(this.state.firstIconStartPos)
console.log(this.state.secondCardDimentions);
console.log(this.state.mainContainerDimentions);
/*console.log(this.state.dimentions);


console.log(this.state.thirdCardDimentions);*/
    return (<div>
      <div className="filler"> asdasd</div>
       <div className="filler"> asdasd</div>
{/*       <div className="filler"> asdasd</div>*/}

      <div ref={this.mainContainerReff} className="mainContainer">

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
{/*        <Comp1 iconNr= {0} startPos={this.getIconStartPos(0)} destination={this.getIconPositions(0)} cardInFocus={this.state.cardInFocus}  aProp = {this.state.isOnHover} delay = {100}/>
*/}
        <Comp1 iconNr= {0} startPos={this.getIconStartPos(0)} destination={this.getIconPositions(0)} cardInFocus={this.state.cardInFocus}  aProp = {this.state.isOnHover} delay = {100}/>
       <Comp1 iconNr= {1} startPos={this.getIconStartPos(1)} destination={this.getIconPositions(1)} cardInFocus={this.state.cardInFocus}  aProp = {this.state.isOnHover} delay = {200}/>
        <Comp1 iconNr= {2} startPos={this.getIconStartPos(2)} destination={this.getIconPositions(2)} cardInFocus={this.state.cardInFocus}  aProp = {this.state.isOnHover} delay = {300}/>
        <Comp1 iconNr= {3} startPos={this.getIconStartPos(3)} destination={this.getIconPositions(3)} cardInFocus={this.state.cardInFocus}  aProp = {this.state.isOnHover} delay = {400}/>




      </div>
       <div className="filler"> asdasd</div>
      </div>
      
    );
  }
}

export default App;
