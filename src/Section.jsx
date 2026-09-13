import { useState, useEffect } from "react";
import SetupSection from "./Setup_Section";
import { SectionContent } from "./Section_Content";
import './App.css'
import { Status } from "./data/Status";
function Section() {
    const [busca,setbusca] = useState('');
    const [Tecnologia,setTecnologia] = useState('Todos');
    const tecnologias = ['Git', 'Vercel','React', 'CSS','HTML','Todos'];
    const [ItensFiltrados, setItensFiltrados] = useState(SectionContent);
    const [concluidas, setconcluidas] =useState(0);
    const [pendentes, setpendentes] =useState(0);
    const [finalizadas, setnfinalizadas] =useState(0);

    useEffect(()=>{
        const resultado = SectionContent.filter((item) =>{
            const Ababusca = busca.toLowerCase();
            const Abatecnologia = Tecnologia === 'Todos' || item.tecnologia.toLowerCase() == Tecnologia.toLowerCase();
            const AbaTexto = item.texto.toLowerCase().includes(Ababusca);
            const AbaTitulo = item.titulo.toLowerCase().includes(Ababusca);
            return Abatecnologia && (AbaTexto || AbaTitulo);
        })
        setItensFiltrados(resultado);
    },[busca,Tecnologia]);
    useEffect(()=>{
        setconcluidas(ItensFiltrados.filter((item) => item.status === "Concluido").length)
        setpendentes(ItensFiltrados.filter((item) => item.status === "Pendente").length)
        setnfinalizadas(ItensFiltrados.filter((item) => item.status === "Não Terminado").length)
    })
    return (
        <>
            <div className="Nav">
                        <h3>
                            Clique nos botões e escreva na aba de busca para pesquisar um cartão!
                        </h3>    
                        <br></br>
                        <div>
                            {
                                tecnologias.map((tech)=>(
                                    <button onClick={() => setTecnologia(tech)}>{tech}</button>
                                ))
                            }
                        </div>
                        <input type="text" placeholder='Digite aqui para pesquisar' value={busca} onChange={(e)=>setbusca(e.target.value)}/>
                        <div>
                            Numero de atividades concluidas: {concluidas}
                            <br/>
                            Numero de atividades pendentes: {pendentes}
                            <br/>
                            Numero de atividades Não terminadas: {finalizadas}
                            <br/>
                        </div>
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