import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 class="font-bold text-3xl underline">
        Hello world!
      </h1>
    </>
  )
}

export default App
