import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Links from './components/Links'
import Profile from  './components/Profile'
import Header from './components/Header'
import Footer from './components/Footer'
import data from "./data"
import Socials from './components/Socials'

function App() {
  // const [count, setCount] = useState(0)
  const links = data.map(item => {
    return (
      <Links
        key = {item.id}
        // I want to display all that the data variable has to offer from our data file
        item = {item}
       />
    )
  })

  return (
    <div className="App">
      <Header />
      <Profile />
      {links}
      <Socials />
      <Footer />
    </div>
  )
}

export default App
