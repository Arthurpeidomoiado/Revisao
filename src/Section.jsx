import { useState } from "react";
import { useEffect } from "react";
import SetupSection from "./Setup_Section";
import { SectionContent } from "./Section_Content";

import './App.css'
function Section() {

    const [Tecnologia, SetTecnologia] = useState('Todos');

    const [busca, Setbusca] = useState('');

    const tecnologias = ['Todos', 'HTML', 'Vercel', 'CSS', 'React', 'Git'];

    const [ItensFiltrados, setItensFiltrados] = useState(SectionContent);

    useEffect(() =>
        {
            const resultado = SectionContent.filter((item) => {
                const bateTecnologia = Tecnologia ==='Todos' || item.tecnologia.toLowerCase() == Tecnologia.toLowerCase();
                const termoBusca = busca.toLowerCase();
                const bateTexto = item.texto.toLowerCase().includes(termoBusca);
                const bateTitulo = item.titulo.toLowerCase().includes(termoBusca);

                return bateTecnologia && (bateTexto || bateTitulo);
            });
            setItensFiltrados(resultado);
        } , [busca,Tecnologia]
    );
    return (
        <>
            <div className="Nav">
                <h3>Clique nos botões para aplicar filtros!</h3>
                {
                    tecnologias.map((tech)=>(
                    <button key={tech}
                        onClick={()=>SetTecnologia(tech)}>
                        {tech}
                    </button>
                ))}
                    <input type="text" 
                    placeholder="digite aqui para pesquisar" 
                    value={busca}   
                    onChange={(e) => Setbusca(e.target.value)}
                    />
            </div>

            <div className='Section' id='section'>
                {
                    ItensFiltrados.map((content)=>(
                        <SetupSection
                            key={content.id}
                            id={content.id}
                            titulo={content.titulo}
                            texto={content.texto}
                            img={content.img}
                            status={content.status}
                            tecnologia={content.tecnologia}
                        />
                        )
                    )
                }
            </div>
        </>
    );
}
export default Section