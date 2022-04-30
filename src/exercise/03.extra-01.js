// useContext: simple Counter
// http://localhost:3000/isolated/exercise/03.js

import * as React from 'react'
// const cw = console.log
 
const CountContext = React.createContext(
  new Error('useCount must be used within a CountProvider'),
)

function CountDisplay() {
  const count = useCount()[0]
  return <div>{`The current count is ${count}`}</div>
}

function Counter() {
  const [, setCount] = useCount()
  const increment = () => setCount(c => c + 1)
  return <button onClick={increment}>Increment count</button>
}
function useCount() {
  const countCtx = React.useContext(CountContext)
  if (countCtx.constructor.name === 'Error') {
    throw countCtx
  }
  return countCtx
}

function CountProvider(props) {
  const countValue = React.useState(0)
  return (
    <CountContext.Provider value={countValue}>
      {props.children}
    </CountContext.Provider>
  )
}

function App() {
  return (
    <div>
      <CountProvider>
        <CountDisplay />
        <Counter />
      </CountProvider>
    </div>
  )
}

export default App
