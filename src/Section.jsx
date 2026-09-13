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
    const concluidas = (ItensFiltrados.filter((item) => item.status === "Concluido").length);
    const pendentes  = (ItensFiltrados.filter((item) => item.status === "Pendente").length);
    const finalizadas = (ItensFiltrados.filter((item) => item.status === "Não Terminado").length);

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

    const totalAtividades = SectionContent.length;

// Calcula a porcentagem e arredonda o valor
const percentual = totalAtividades > 0 
  ? Math.round((concluidas / totalAtividades) * 100) 
  : 0;

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
                {/* Requisito 20: Barra de Progresso Acessível */}
                    <div className="container-barra" style={{ marginTop: '10px', marginBottom: '15px' }}>
                        <progress 
                            value={percentual} 
                            max="100" 
                            aria-label="Progresso de conclusão das atividades"
                            aria-valuenow={percentual}
                            aria-valuemin="0"
                            aria-valuemax="100"
                            style={{ width: '100%', height: '20px' }}
                        >
                            {percentual}%
                        </progress>
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