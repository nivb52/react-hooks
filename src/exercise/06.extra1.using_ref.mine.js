// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  const inputRef = React.useRef()

  const [username, setUsername] = React.useState('')
  const [errorInputUserName, setErrorInputUserName] = React.useState('')

  const handleSubmit = ev => {
    ev.preventDefault()
    console.log(errorInputUserName)
    if (errorInputUserName) {
      alert(errorInputUserName)
      return
    }
    onSubmitUsername(username)
  }

  const handleUserNameChange = ev => {
    const usernameInputTrimed = inputRef.current.value.trim()
    const isValid = /^[a-z]+$/g.test(usernameInputTrimed)
    if (!usernameInputTrimed){
      setErrorInputUserName('Username cannot be empty')
    } else if (isValid) {
      setErrorInputUserName('')
      setUsername(usernameInputTrimed)
    } else {
      setErrorInputUserName(
        'Username must be lower case',
      )
    }
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
        <input onChange={handleUserNameChange} ref={inputRef} type="text" />
        {errorInputUserName && (
          <div role="alert">
            <span style={{color: 'red'}}>
              {errorInputUserName}
            </span>
          </div>
        )}
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
