import { useState } from 'react'
import './App.css'
import Section from './Section'
import Nav from './Nav'
import Header from './Header'
import Footer from './Footer'
import {Main} from './main'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <Nav/>
    <Main />
    <Section/>
    <Footer/>
    </>
  )
}

export default App
