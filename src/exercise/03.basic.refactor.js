// useContext: simple Counter
// http://localhost:3000/isolated/exercise/03.js

import * as React from 'react'

const CountContext = React.createContext({});

function CountDisplay() {
  const count = React.useContext(CountContext)[0]
  return <div>{`The current count is ${count}`}</div>
}

function Counter() {
  const countCtx = React.useContext(CountContext)
  const setCount = countCtx[1]
  const increment = () => setCount(c => c + 1)
  return <button onClick={increment}>Increment count</button>
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
