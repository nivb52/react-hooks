// useEffect: HTTP requests
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'
import {
  fetchPokemon,
  PokemonForm,
  PokemonInfoFallback,
  PokemonDataView,
} from '../pokemon'

const IDLE = 'idle',
  PENDING = 'pending',
  RESOLVED = 'resolved',
  REJECTED = 'rejected';

function PokemonInfo({pokemonName}) {
  const [pokemon, setPokemon] = React.useState(null)
  const [error, setError] = React.useState(null)
  const [status, setStatus] = React.useState(IDLE)
  const resolved = (res) => {
    setPokemon(res)
    setStatus(RESOLVED)
  }
  const rejected = (err) => {
    setError(err)
    setStatus(REJECTED)
  }
  const pending = () => {
    setStatus(PENDING)
    setPokemon(null)

  }
  React.useEffect(() => {
    if (typeof pokemonName === 'string' && pokemonName.trim()) {
      pending();
      fetchPokemon(pokemonName).then(resolved).catch(rejected)
    }
  }, [pokemonName])

  const renderSwitch = () => {
    switch (status) {
      case PENDING:
        return <PokemonInfoFallback name={pokemonName} />
      case RESOLVED:
        return <PokemonDataView pokemon={pokemon} />
      case REJECTED:
        return (<div role="alert">
          There was an error:
          <pre style={{ whiteSpace: 'normal' }}>{error.message}</pre>
        </div>)
      case IDLE:
      default:
        return 'Submit a pokemon'
    }
  }
  
  return (
    <div>
      {
        renderSwitch()
      }
    </div>
  )
}

function App() {
  const [pokemonName, setPokemonName] = React.useState('')

  function handleSubmit(newPokemonName) {
    setPokemonName(newPokemonName)
  }

  return (
    <div className="pokemon-info-app">
      <PokemonForm pokemonName={pokemonName} onSubmit={handleSubmit} />
      <hr />
      <div className="pokemon-info">
        <PokemonInfo pokemonName={pokemonName} />
      </div>
    </div>
  )
}

export default App
