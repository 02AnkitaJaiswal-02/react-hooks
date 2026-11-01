import { memo, useState } from "react";

const Student = memo(function Student({ name, onClick }) {
  console.log("Student rendered");

  return (
    <div>
      <h2>Student: {name}</h2>
      <button onClick={onClick}>Say Hello</button>
    </div>
  );
});

function App() {
  const [count, setCount] = useState(0);

  function handleHello() {
    console.log("Hello Rahul");
  }

  return (
    <div>
      <h1>Count: {count}</h1>

      <button onClick={() => setCount(c => c + 1)}>
        Increase Count
      </button>

      <Student name="Rahul" onClick={handleHello} />
    </div>
  );
}

export default App;