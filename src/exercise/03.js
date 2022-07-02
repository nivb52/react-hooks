// Flexible Compound Components
// http://localhost:3000/isolated/exercise/03.js

import * as React from 'react'
import {Switch} from '../switch'

// 🐨 create your ToggleContext context here
// 📜 https://reactjs.org/docs/context.html#reactcreatecontext

const ToggleContext = React.createContext({on: null, toggle: () => {}})
ToggleContext.displayName = 'ToggleContext'

function useToggle() {
  const context = React.useContext(ToggleContext)
  if (!context) {
    throw Error('useToggle must be used within <Toggle />')
  }

  return context
}

function Toggle({children}) {
  const [on, setOn] = React.useState(false)
  const toggle = () => setOn(!on)

  const value = {toggle, on}
  return (
    <ToggleContext.Provider value={value}> {children} </ToggleContext.Provider>
  )
}

// 🦉 You can create a helper method to retrieve the context here. Thanks to that,
// your context won't be exposed to the user
// 📜 https://reactjs.org/docs/hooks-reference.html#usecontext

function ToggleOn({children}) {
  const toggleValue = useToggle()
  return toggleValue.on ? children : null
}

function ToggleOff({children}) {
  const toggleValue = useToggle()
  return toggleValue.on ? null : children
}

function ToggleButton({props}) {
  const toggleValue = useToggle()

  return <Switch on={toggleValue.on} onClick={toggleValue.toggle} {...props} />
}

function App() {
  return (
    <div>
      <Toggle>
        <ToggleOn>The button is on</ToggleOn>
        <ToggleOff>The button is off</ToggleOff>
        <div>
          <ToggleButton />
        </div>
      </Toggle>
    </div>
  )
}

export default App

/*
eslint
  no-unused-vars: "off",
*/
