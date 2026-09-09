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

      <h1>Sobre o autor</h1>
      <p> Esse site foi criado por [Seu Nome], um desenvolvedor apaixonado por tecnologia e design, estudante da universidade
        Senai Cimatec, participante do curso de engenharia da computação da turma de 2026.2 do prof Celso, 6 semestre.
      </p>
      <img src="" alt="Foto do autor" />
      <a href="" id="">Mais sobre o autor</a>

      <a href="">Link1</a>
      <a href="">Link2</a>
      <a href="">Link3</a>

      
    </>

  )
}

export default App
