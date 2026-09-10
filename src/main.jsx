import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
export function Main(){
  return(
    <main className='Main'>
      <h1>
        Main da página
      </h1>
    </main>
  )
}
