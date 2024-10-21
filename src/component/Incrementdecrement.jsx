import React, { useState } from 'react';
import './Increment.css'

const Incrementdecrement = () => {
    const[number,setNumber]=useState(0)

  return (
    <div className='mydiv'>
     <p>increment or decrement project</p>
  <div className="resultarea">
  <button>{number}</button>
  </div>
<div className="countarea">
      <button onClick={()=>{setNumber(number+1)}}>+</button>
       <button onClick={()=>{setNumber(number-1)}}>-</button>
</div>
    </div>
  );
}

export default Incrementdecrement;
