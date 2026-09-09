import Secao from './App.css';
import {Conteudo_Section} from './Conteudo_Section.js';

function Section({ titulo, descricao}) {
    return (
        <section className="Secao">
            <h2>{titulo}</h2>
            <br></br>
            <p>{descricao}</p>
        </section>
    )
}