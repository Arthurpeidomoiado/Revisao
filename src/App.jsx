import './App.css'
import Section from './Section'
import Nav from './Nav'
import Header from './Header'
import Footer from './Footer'
import {Main} from './main'

import { useState } from 'react';
function App() {
  return (
      <>
        <Header />
        <Nav />
        <Main />
        <Section />
        <Footer />
      </>
  )
}

export default App
