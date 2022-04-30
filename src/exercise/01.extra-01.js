// useReducer: simple Counter
// http://localhost:3000/isolated/exercise/01.js

import * as React from 'react'
function countReducer(prevCount, step) {
  return prevCount+step
}

function Counter({initialCount = 0, step = 1}) {
  const [count, setCount] = React.useReducer(countReducer, initialCount)
  
  const increment = () => setCount(step)
  return <button style={{height:50, width: 50}} onClick={increment}>{count}</button>
}

function App() {
  return <Counter />
}

export default App
