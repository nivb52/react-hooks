    // useReducer: simple Counter
// http://localhost:3000/isolated/exercise/01.js

import * as React from 'react'
function countReducer(prevState, newState = {}) {
  if (typeof newState === 'function') {
    return (newState(prevState) )
  }
  return ({prevState, ...newState})
}

function Counter({initialCount = 0, step = 1}) {
  const [state, setState] = React.useReducer(countReducer, {
    count: initialCount,
  })
const increment = () => setState(currentState => ({ count: currentState.count + step }))
  
  return (
    <button style={{height: 50, width: 50}} onClick={increment}>
      {state.count}
    </button>
  )
}

function App() {
  return <Counter />
}

export default App
