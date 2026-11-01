import React, { useEffect, useState } from 'react'

const Effect = () => {
  const [count, setcount]= useState(0);
  const [time, setTime] = useState( new Date().toLocaleTimeString());

useEffect(() => {
    // Set up an interval to update the time every second
  const timer = setInterval(() => 
    { setTime(new Date().toLocaleTimeString()); },1000);
  
  // Cleanup function to clear the interval when the component unmounts
  return () => {
    clearInterval(timer);
    console.log("unmount");
  }
}
// dependency array is empty, so this effect runs only once after the initial render, you can also add dependencies if you want the effect to run when certain values change by adding them to the array after putting comma
)

  function handleclick(){
    setcount(count+1);
  }
  return (
    <div>
      <h1>First App</h1>
      <h2>{time}</h2>
      <button onClick={handleclick}> Click</button>
    </div>
  )
}

export default Effect;