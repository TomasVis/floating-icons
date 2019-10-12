import React, {useEffect } from 'react'
import ReactDOM from 'react-dom'
import { useSpring, animated } from 'react-spring'
/*import '../cssFiles/Card.css'*/




function Card(props) {
  const [val, set] = useSpring(() => ({ scale: 1, config: { mass: 5, tension: 350, friction: 40 } }))
  console.log(val)

  useEffect(() => {
    set(props.aProp?{ scale: 1.1 }:{ scale: 1 })
    //console.log('count changed', props.aProp);


}, [props.aProp])
  return (
    <animated.div
    
      className="card"

      style={{ transform: val.scale.interpolate((s) =>{ return ` scale(${s})`}) }}
    />
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
