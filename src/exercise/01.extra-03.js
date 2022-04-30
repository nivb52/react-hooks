    // useReducer: simple Counter
// http://localhost:3000/isolated/exercise/01.js

import * as React from 'react'
function countReducer(prevState, {type, step}) {
  switch (type) {
    case 'INCREMENT':
      return {count: prevState.count + step}

    default:
      break
  }
}

function Counter({initialCount = 0, step = 1}) {
  const [state, dispatch] = React.useReducer(countReducer, {
    count: initialCount,
  })
const increment = () => dispatch({type: 'INCREMENT', step})
  
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
