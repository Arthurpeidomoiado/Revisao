import {Conteudo_Section} from './Conteudo_Section.js';
import Setup from './Setup.jsx';
function Section({ titulo, descricao}) {
    return (
        <section>
            <h1>Perguntas e respostas</h1>
            <div>{Conteudo_Section.map((conteudo)=> 
                (<Setup
                    key={conteudo.id} 
                    titulo={conteudo.titulo} 
                    descricao={conteudo.descricao}
                />
            )
            )
            }</div>
        </section>
    )
}
export default Section