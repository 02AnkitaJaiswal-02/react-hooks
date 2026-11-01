import React, { useState } from 'react'





const State = () => {
    //  var number=0;
      const [number, setnumber]= useState(0);
     function handleClick(){
        setnumber(number+1);
        console.log(number);
     }
  return (
    <div>
        <h1>nnnn</h1>
        <p>{number}</p>
       <button onClick={handleClick}> INcrese </button> 
    </div>
  )
}

export default State;
