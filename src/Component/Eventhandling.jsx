import React from 'react'

const Eventhandling = () => {
    function handleClick(){
        console.log("button is clicked");
    }
  return (
    <div>
      <button onClick={handleClick}>Click Me</button>
    </div>
  )
}

export default Eventhandling;
