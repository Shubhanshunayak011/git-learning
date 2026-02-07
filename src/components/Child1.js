import React from 'react'
import './Child1.css'

function Child1(props) {
  return (
    <div className='child1_main_div'>

      <h1>{props.id}</h1>
      <h3>{props.name}</h3>
      <p> {props.class}</p>
    </div>
  )
}

export default Child1