import './App.css'
import Section from './Section'
import Nav from './Nav'
import Header from './Header'
import Footer from './Footer'

function Main() {
  return (
    <main className='Main'>
      <h1 className='Titulo_Apresentacao'>Apresentação</h1>
      <br />
      <p>
        Esse trabalho foi realizado por Arthur Gabriel Cabiceira Santos. Um estudante de
        Engenharia da Computação na universidade Senai cimatec para a matéria de Fullstack do 6
        semestre de 2026.2 do Prof. Celso.
      </p>
      <br />
      <img src="/favicon.svg" alt="Logo do projeto" />
      <br />
      <small>Qualquer detalhe de contato estará disponível no topo e na parte inferior da página.</small>
      <br />
      <a href="#section">Vá para o repertório!</a>
    </main>
  )
}

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
