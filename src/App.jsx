import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NewFeed from './components/NewFeed.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
          <img src={viteLogo} className="logo" alt="Vite logo" />
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <h1>Mayur project 💘</h1>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
          <img src={reactLogo} className="logo react" alt="React logo" />
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
     
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default App
