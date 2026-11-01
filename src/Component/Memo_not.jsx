import { useState } from "react";

function slowSquare(n) {
  console.log("Calculating...");
  for (let i = 0; i < 1000000000; i++) {}  
  return n * n;
}
 
function Memo_not() {
  const [number, setNumber] = useState(2);
  const [likes, setLikes] = useState(0);
  const square = slowSquare(number);
 
  return <>
    <p>Square: {square}</p>
    <p>Likes: {likes}, number: {number}</p>
    <button onClick={() => setNumber(number + 1)}>+1</button>
    <button onClick={() => setLikes(likes + 1)}>Like</button>
  </>;
}


export default Memo_not;