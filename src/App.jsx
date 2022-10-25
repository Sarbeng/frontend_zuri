import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Links from './components/Links'
import Profile from  './components/Profile'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header />
      <Profile />
      <Links />
      <Footer />
    </div>
  )
}

export default App
