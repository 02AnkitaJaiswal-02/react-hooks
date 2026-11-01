import { memo, useState } from "react";

const Student = memo(function Student({ name }) {
  console.log("Student rendered");

  return <h2>Student: {name}</h2>;
});
// function Student({ name }) {
//   console.log("Student rendered");

//   return <h2>Student: {name}</h2>;
// }

function Callback2() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Count: {count}</h1>

      <button onClick={() => setCount(c => c + 1)}>
        Increase Count
      </button>

      <Student name="Rahul" />
    </div>
  );
}

export default Callback2;