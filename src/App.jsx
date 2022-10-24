import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Links from './components/Links'
import Profile from  './components/Profile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Links />
      <Profile />
    </div>
  )
}

export default App
