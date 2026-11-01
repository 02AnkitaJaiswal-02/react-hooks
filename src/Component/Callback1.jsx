import { useState, memo, useCallback } from "react";
const Student = memo(function Student({ name, onClick }) {
  console.log("Student rendered");
  return <>
  <h2>Student: {name}</h2>;
  <button onClick={onClick}> click inside child</button>
  </>
  
})
function Callback1() {
   const  handleClick = useCallback(
     () => {
       console.log("child is created");
     },
     []
   )
  
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Count: {count}</h1>

      <button onClick={() => setCount(c => c + 1)}>
        Increase Count
      </button>

      <Student name="Rahul" onClick={handleClick} />
    </div>
  );
}
export default Callback1;