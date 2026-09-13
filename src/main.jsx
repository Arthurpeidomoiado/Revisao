import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import './App.css'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
export function Main() {
  return (
    <main className='Main' id='sobre'>
      <h1 className='Titulo_Apresentacao'>Apresentação</h1>
      <br />
      <div className='TextoApresentacao'>
          <div className='texto'>
            Esse trabalho foi realizado por Arthur Gabriel Cabiceira Santos. Um estudante de Engenharia da Computação na universidade Senai cimatec para a matéria de Fullstack do 6 semestre de 2026.2 do Prof. Celso.
          </div>
          <img src="../imagens/imagem_perfil.jpg" alt="Perfil" width='50%'/>
      </div>
      <br></br>
      <small>Qualquer detalhe de contato estará disponível no topo e na parte inferior da página.</small>
      <br />
      <a href="#section">Vá para o repertório!</a>
    </main>
  )
}