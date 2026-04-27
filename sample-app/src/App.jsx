import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>Updated Sample App</h1>
      <p>Welcome to your new React application!</p>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Current count: {count}
        </button>
      </div>
    </div>
  )
}

export default App
