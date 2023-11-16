import { useState, useEffect } from 'react'
import PokeList from './components/PokeList'
import './App.css'
import PokeRow from './components/PokeRow'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
       <PokeList />
      </div>
    
    </>
  )
}

export default App
