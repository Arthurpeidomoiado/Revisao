import './App.css'
function Nav(){
    return(
        <nav className='Nav'>
            <h3>
                Nav da página
            </h3>
            <div nameClasss="link">    
                    <ul>
                        <img src="imagens/OIP.jpeg" width='4%'/>
                        <a href='#inicio'>Link para o inicio</a>
                    </ul>
                    <ul>
                        <img src="imagens/OIP.jpeg" width='4%'/>
                        <a href='#sobre'>Link para o Sobre o autor</a>
                    </ul>
                    <ul>
                        <img src="imagens/OIP.jpeg" width='4%'/>
                        <a href='#atividades'>Link para o Atividades</a>
                    </ul>
                    <ul>
                        <img src="imagens/OIP.jpeg" width='4%'/>
                        <a href='#contato'>Link para o Contato</a>
                    </ul>
            </div>
        </nav>
    )
}
export default Nav