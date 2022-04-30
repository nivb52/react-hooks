// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  const [username, setUsername] = React.useState('')
  const [errorInputUserName, setErrorInputUserName] = React.useState('')

  const handleSubmit = ev => {
    ev.preventDefault()
    onSubmitUsername(username)
  }

  const handleUserNameChange = ev => {
    const input = ev.target.value
    const validUsernameInput = input.trim().toLowerCase()
    const isValid = /^[a-z]+$/g.test(validUsernameInput)
    setErrorInputUserName(
      !validUsernameInput
        ? 'Username cannot be empty'
        : isValid
        ? ''
        : 'Username must be lower case',
    )
    setUsername(validUsernameInput)
  }

  return (
    <form
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '25vh',
      }}
      onSubmit={handleSubmit}
    >
      <div>
        <label>Username:</label>
        <input value={username} onChange={handleUserNameChange} type="text" />
      </div>
      <button disabled={Boolean(errorInputUserName)} type="submit">
        Submit
      </button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
