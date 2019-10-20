import React, {useEffect } from 'react'
import ReactDOM from 'react-dom'
import { useSpring, animated } from 'react-spring'
import shortenerImg from '../assets/urlShortener.png';
import calculator from '../assets/Calculator.png';
/*import '../cssFiles/Card.css'*/
  //background-image: url(./assets/card-with-slots-and-github.png);

let images = [shortenerImg,calculator,calculator];

function Card(props) {
  const [val, set] = useSpring(() => ({ scale: 1, config: { mass: 5, tension: 350, friction: 40 } }))
 // console.log("from card "+ props.id+" "+  props.cardInFocus)
 // console.log(props.id==props.cardInFocus)

  useEffect(() => {
    set(props.aProp&&props.id==props.cardInFocus?{ scale: 1.1 }:{ scale: 1 })
    //console.log('count changed', props.aProp);


}, [props.aProp])
  return (
    <animated.div
    
      className="card"

      style={{ transform: val.scale.interpolate((s) =>{ return ` scale(${s})`}) }}
    >

{/*    <div id="cardChild"  className="projectWindow"></div>*/}
   <button id="cardChild"  className = "button">aaaa</button>
   <svg width="120" height="120">
  <a  href="#"> <circle className="circle" cx="60" cy="60" r="60"  /> </a>
</svg>
    <div id="cardChild" className="decorationalWindow"></div>
    </animated.div>
  )
}
/*function Card() {
  const [val, set] = useSpring(() => ({ sc: 0.3, config: { mass: 5, tension: 350, friction: 40 } }))
  console.log(val)
  return (
    <animated.div
      className="card"
      onMouseEnter={() => set({ sc: 1 })}
      onMouseLeave={() => set({ sc: 0.3 })}
      style={{ opacity: val.sc.interpolate((s) =>{ return `${s}`}) }}
    />
  )
}*/
export default Card;
