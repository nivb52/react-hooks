// useContext: simple Counter
// http://localhost:3000/isolated/exercise/03.js

import * as React from 'react'

const cw = console.log
// 🐨 create your CountContext here with React.createContext
const CountContext = React.createContext({});

// 🐨 create a CountProvider component here that does this:
//   🐨 get the count state and setCount updater with React.useState
//   🐨 create a `value` array with count and setCount
//   🐨 return your context provider with the value assigned to that array and forward all the other props
//   💰 more specifically, we need the children prop forwarded to the context provider

function CountDisplay() {
  // 🐨 get the count from useContext with the CountContext
  const count = React.useContext(CountContext)[0]
  return <div>{`The current count is ${count}`}</div>
}

function Counter() {
  // 🐨 get the setCount from useContext with the CountContext
  const countCtx = React.useContext(CountContext)
  cw('count', countCtx)
  const setCount = countCtx[1]
  const increment = () => setCount(c => c + 1)
  return <button onClick={increment}>Increment count</button>
}

function App() {
  const [count, setCount] = React.useState(0)
  return (
    <div>
      {/*
        🐨 wrap these two components in the CountProvider so they can access
        the CountContext value
      */}
      <CountContext.Provider value={[count,setCount]}>
      <CountDisplay />
        <Counter />
      </CountContext.Provider>
    </div>
  )
}

export default App
