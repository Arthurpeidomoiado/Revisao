import { useState } from 'react'
import './App.css'
import Header from './Header'
import Nav from './Nav'
import Section from './Section'
import Footer from './Footer'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Nav />
      <Section />
      <Footer />

      <h1>Versão do Node: v24.16.0  Versão do Npm: v11.13.0  O ambiente está pronto para uso!</h1>
      <br />
      <h1>O site foi criado no branch MASTER mas logo mudado para o branch Main, deixando mais claro o uso conforme as normas.</h1>
      <br />
      <h1>Esse site conta com divisões explícitas para melhor organização, como Header, Nav, Section e Footer.</h1>
      <br />
    </>

  )
}

export default App
