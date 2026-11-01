import { useState, useMemo, useCallback } from 'react'

import './App.css'
import Memo_not from './Component/Memo_not'
import Memo from './Component/Memo'
import Callback1 from './Component/Callback1'
import Callback2 from './Component/Callback2'
import Callback3 from './Component/Callback3'
import Callback4 from './Component/Callback4'
import Custom1 from './Component/Custom1'
import Custom2 from './Component/Custom2'
import Custom3 from './Component/Custom3'
import Eventhandling from './Component/Eventhandling'
import State from './Component/State'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <h1>React Hooks</h1>
       <Callback3/>
       {/* <Custom1 /> */}
       {/* <State/> */}
       {/* Event Handling
      <Eventhandling /> */}
      {/* <hr /> */}
       {/* <Memo_not/> */}
       {/* <Memo/> */}
       <p>without reactmemo and usecallback</p>
       {/* <Callback1/> */}
       <hr />
       {/* <Callback3 /> */}
       {/* <p> with reactmemo and without usecallback</p>
       <Callback2/>
       <p> along with function as props</p>
       <Callback3 />
       <p>with both</p>
      < Callback4/> */}
      {/* <p>hhhhh</p>
      // <Custom1 />
      <p>Custom 2</p>
      <Custom2/>
      <p>Custom 3</p>
      <Custom3/> */}
            {/* <button onClick={() => setCount(c => c + 1)}>
        Increase Count
      </button>
      <h1>Count: {count}</h1>
      <Custom3 /> */}

    </>
  )
}

export default App;
