// useEffect: HTTP requests
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

import {
  fetchPokemon,
  PokemonForm,
  PokemonInfoFallback,
  PokemonDataView,
  PokemonErrorBoundary,
} from '../pokemon'

const IDLE = 'idle',
  PENDING = 'pending',
  RESOLVED = 'resolved',
  REJECTED = 'rejected'
  

function PokemonInfo({ pokemonName }) {
  
  const [state, setState] = React.useState({status: IDLE, pokemon: null, error: null})
  const setResolvedStatus = res => {
    setState({status: RESOLVED, pokemon: res, error: null})
  }
  const setRejectedStatus = err => {
    setState({status: REJECTED, error: err, pokemon: null})
  }
  const setPendingStatus = () => {
    setState({status: PENDING, pokemon: null, error: null})
  }
  const setIdleStatus = () => {
    setState({status: IDLE, pokemon: null, error: null})
  }

  React.useEffect(() => {
    if (typeof pokemonName === 'string' && pokemonName.trim()) {
      setPendingStatus()
      fetchPokemon(pokemonName).then(setResolvedStatus).catch(setRejectedStatus)
    }
  }, [pokemonName])

  const renderSwitch = () => {
    switch (state.status) {
      case PENDING:
        return <PokemonInfoFallback name={pokemonName} />
      case RESOLVED:
        return <PokemonDataView pokemon={state.pokemon} />
      case REJECTED:
        return PokemonErrorBoundary({
              error: state.error,
              resetErrorBoundary: setIdleStatus,
          resetKeys: [pokemonName],
        })
      case IDLE:
      default:
        return 'Submit a pokemon'
    }
  }

  return <div>{renderSwitch()}</div>
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
