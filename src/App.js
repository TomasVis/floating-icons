//TODO
//make start positions relative to viewport
//change icon and name in browser tab not to be react default
// in git hub change description


import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import { Spring  } from 'react-spring/renderprops';
import Comp1 from './components/Comp1';
import Card from './components/Card';
import Visibility from './components/Visibility';





class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      id:null,
      isOnHover:false,
      startPos:[[80,100],[110,400],[180,400],[300,200],[180,200],[280,400],[180,80],[280,500],[180,600],[280,600],[80,40],[800,400],],
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
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
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
   handleMouseLeave(e){

    this.setState({isOnHover:false,cardInFocus:-1})
  } 

  getIconPositions(iconNum){
//has to be different arrays for different number of slots for each card
    const slotsForIcons = [

    [{x:300,y:40},{x:280,y:94},{x:272,y:150},{x:280,y:203},{x:310,y:203},{x:310,y:250}],
    [{x:300,y:40},{x:280,y:94},{x:272,y:150},{x:280,y:203}],
    [{x:300,y:40},{x:280,y:94},{x:280,y:94}]
    ];// array with values to add to original card position, placing each icon to its slot

    const { cardInFocus, startPos } = this.state;
    const { width, height } = this.state.mainContainerDimentions;
    
    let val = cardInFocus==0 ? this.state.firstCardDimentions:   //determines to which location cards should flow based on which card is in focus
              cardInFocus==1 ? this.state.secondCardDimentions:
              cardInFocus==2 ? this.state.thirdCardDimentions:
              {x:0,y:0} 

    let arr = cardInFocus==0 ? [0,1,2,3,4,5]:                        // arr represents array that controlls wheather the icon should go to the card, or stay in its initial position
              cardInFocus==1 ? [2,3]:                          // each number in array represents the icon which needs to know where to go
              cardInFocus==2 ? [0,1,3]:
              [0,1,2,3]

let index=0;
let inc =0;                                                                 // this value will be incremented and added to the x value to align icons
let answ= {};
//console.log(this.state.cardInFocus)
//let arr = [[0,1,2,3],[1,3],[1,4]];

//console.log("iconNum "+iconNum)
if(!arr.includes(iconNum)){                                      // if icon number is not in the array the icon gets destination of its initial position
  //console.log("not includes "+iconNum)
    let x = startPos[iconNum][0] >= 0 ?  startPos[iconNum][0] :  width + startPos[iconNum][0] ;
    let y = startPos[iconNum][1] >= 0 ? startPos[iconNum][1] : height + startPos[iconNum][1] ;
   answ = val = {x:x,y:y} 

}
else{                                                                        // adds arbitrary number to x axis for individual icon alignment
  arr.forEach(el =>{
    if(iconNum == el){
      //console.log(slotsForIcons[index])
      //console.log("val "+val+" "+" slotsForIcons[index][iconNum] "+slotsForIcons[index])
    }
    //answ = iconNum == x ? val = {...val,x:val.x+inc} : val;
    answ = iconNum == el ? val = {x:val.x+slotsForIcons[cardInFocus!=-1?cardInFocus:0][index].x ,
     y:val.y+slotsForIcons[cardInFocus!=-1?cardInFocus:0][index].y,o:1} : val;
    //answ =  {x:val.x+slotsForIcons[iconNum][index].x , y:val.y+slotsForIcons[iconNum][index].y};
    index++;
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

console.log(this.state.isOnHover)
//console.log(this.state.secondCardDimentions);
//console.log(this.state.mainContainerDimentions);
/*console.log(this.state.dimentions);


console.log(this.state.thirdCardDimentions);*/
    return (<div>
      <div className="filler"> asdasd</div>
      <Visibility src='http://placekitten.com/200/300'/>
       <div className="filler"> asdasd</div>
{/*       <svg width="120" height="120">
  <a href="#">
    <path d="M   0   0
             L 120   0
             L 120 120
             L  60  80
             L   0 120
             Z"
          fill="#007BFF"/>
  
   <text x="60"
          y="50"
          fill="#FFFFFF"
          text-anchor="middle"
          alignment-baseline="middle">
      I'm a link.
    </text>
  </a>
</svg>*/}
{/*       <div className="filler"> asdasd</div>*/}

      <div ref={this.mainContainerReff} className="mainContainer">

        <div 
          id={0} 
          className="wrapper"
          ref={this.firstCardReff}                           
          onMouseOver={this.handleMouseOver}          
          onMouseLeave={this.handleMouseLeave}          
        >
          <Card id={0}  cardInFocus={this.state.cardInFocus} aProp = {this.state.isOnHover} />            
        </div>

       <div 
          id={1} 
          className="wrapper"
          ref={this.secondCardReff}                           
          onMouseOver={this.handleMouseOver}          
          onMouseLeave={this.handleMouseLeave}          
        >
          <Card id={1}  cardInFocus={this.state.cardInFocus} aProp = {this.state.isOnHover} />            
        </div>
        
        
        <div 
          id={2} 
          className="wrapper"
          ref={this.thirdCardReff}                           
          onMouseOver={this.handleMouseOver}          
          onMouseLeave={this.handleMouseLeave}          
        >
          <Card   id={2}  cardInFocus={this.state.cardInFocus} aProp = {this.state.isOnHover} /> 
          
                
        </div>

       <Comp1 iconNr= {0} startPos={this.getIconStartPos(0)} destination={this.getIconPositions(0)} cardInFocus={this.state.cardInFocus}  aProp = {this.state.isOnHover} delay = {100}/>
       <Comp1 iconNr= {1} startPos={this.getIconStartPos(1)} destination={this.getIconPositions(1)} cardInFocus={this.state.cardInFocus}  aProp = {this.state.isOnHover} delay = {200}/>
        <Comp1 iconNr= {2} startPos={this.getIconStartPos(2)} destination={this.getIconPositions(2)} cardInFocus={this.state.cardInFocus}  aProp = {this.state.isOnHover} delay = {300}/>
        <Comp1 iconNr= {3} startPos={this.getIconStartPos(3)} destination={this.getIconPositions(3)} cardInFocus={this.state.cardInFocus}  aProp = {this.state.isOnHover} delay = {400}/>
        <Comp1 iconNr= {4} startPos={this.getIconStartPos(4)} destination={this.getIconPositions(4)} cardInFocus={this.state.cardInFocus}  aProp = {this.state.isOnHover} delay = {400}/>
        <Comp1 iconNr= {5} startPos={this.getIconStartPos(5)} destination={this.getIconPositions(5)} cardInFocus={this.state.cardInFocus}  aProp = {this.state.isOnHover} delay = {400}/>
        <Comp1 iconNr= {6} startPos={this.getIconStartPos(6)} destination={this.getIconPositions(6)} cardInFocus={this.state.cardInFocus}  aProp = {this.state.isOnHover} delay = {400}/>
        <Comp1 iconNr= {7} startPos={this.getIconStartPos(7)} destination={this.getIconPositions(7)} cardInFocus={this.state.cardInFocus}  aProp = {this.state.isOnHover} delay = {400}/>
        <Comp1 iconNr= {8} startPos={this.getIconStartPos(8)} destination={this.getIconPositions(8)} cardInFocus={this.state.cardInFocus}  aProp = {this.state.isOnHover} delay = {400}/>
        <Comp1 iconNr= {9} startPos={this.getIconStartPos(9)} destination={this.getIconPositions(9)} cardInFocus={this.state.cardInFocus}  aProp = {this.state.isOnHover} delay = {400}/>
        <Comp1 iconNr= {10} startPos={this.getIconStartPos(10)} destination={this.getIconPositions(10)} cardInFocus={this.state.cardInFocus}  aProp = {this.state.isOnHover} delay = {400}/>
        <Comp1 iconNr= {11} startPos={this.getIconStartPos(11)} destination={this.getIconPositions(11)} cardInFocus={this.state.cardInFocus}  aProp = {this.state.isOnHover} delay = {400}/>




      </div>
       <div className="filler"> asdasd</div>
      </div>
      
    );
  }
}

export default App;
