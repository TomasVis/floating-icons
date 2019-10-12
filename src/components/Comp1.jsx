import React, {useEffect } from 'react'
import ReactDOM from 'react-dom'
import { useSpring, animated, config } from 'react-spring'
//import './styles.css'
//config: { mass: 5, tension: 350, friction: 40 }


const trans = (x, y, o) =>{ return ` translate(${x}px,${y}px)`}
const transOp = (x, y, o) =>{ return `${o}`}


function Comp1(props) {

  const [val, set ] = useSpring(() => ({ xyo: props.startPos,config: { mass: 5, tension: 250, friction: 80} }))
//console.log(val)
useEffect(() => {
  setTimeout(() => set(props.aProp?{xyo: [props.dimentions.x,props.dimentions.y,1]}:{xyo: props.startPos}), props.delay)
   // set(props.aProp?{xyo: [props.dimentions.x,props.dimentions.y,1]}:{xyo: [0,0,0.01]})
    //console.log('count changed', props.aProp);


}, [props.aProp])
  return (
    <div className="icons"  >
      <animated.div
         style={{ transform: val.xyo.interpolate(trans),opacity: val.xyo.interpolate(transOp)}}


        >
        
        <img src="https://mpng.pngfly.com/20190111/thz/kisspng-mongodb-logo-database-nosql-postgresql-how-to-create-an-outstanding-tech-stack-clickup-bl-5c391bdf9cff48.4731136215472465596431.jpg"/>

      </animated.div>
    </div>
  )
}

export default Comp1
/*function Comp1(props) {

  const val = useSpring({ 
    from: { transform:`translate(${props.x}px,${props.y}px)`}, 
    to:{transform:`translate(${props.aProp ? 0 : props.x}px,${props.aProp ? 0 : props.y}px)`},
   config:config.wobbly,
   delay:props.delay

     })
//console.log(val)
  return (
    <div className="icons"  >
      <animated.div
        style={val}


        >
        
        <img src="https://mpng.pngfly.com/20190111/thz/kisspng-mongodb-logo-database-nosql-postgresql-how-to-create-an-outstanding-tech-stack-clickup-bl-5c391bdf9cff48.4731136215472465596431.jpg"/>

      </animated.div>
    </div>
  )
}*/