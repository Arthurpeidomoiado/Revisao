import { useState } from "react";
import SetupSection from "./Setup_Section";
import { SectionContent } from "./Section_Content";

import './App.css'
function Section() {

    const [Tecnologia, SetTecnologia] = useState('');

    const [Item, SetItem] = useState([]);

    const tecnologias = ['Todos', 'HTML', 'Vercel', 'CSS', 'React', 'Git'];

    const itensFiltrados = Tecnologia === '' || Tecnologia === 'Todos'
    ? SectionContent
    : SectionContent.filter(Item => Item.tecnologia.toLowerCase() == Tecnologia.toLowerCase());

    return (
        <>
            <div>
                {
                    tecnologias.map((tech)=>(
                    <button key={tech}
                        onClick={()=>SetTecnologia(tech)}>
                        {tech}
                    </button>
                ))}
            </div>
            <div className='Section' id='section'>
                {
                    itensFiltrados.map((content)=>(
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