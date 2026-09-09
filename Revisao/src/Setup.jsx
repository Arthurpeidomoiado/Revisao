import Section from './Section';
import { Conteudo_Section } from './Conteudo_Section';
function Setup({titulo, descricao}) {
    return (
        <div>
            {Conteudo_Section.map((card) => (
                <Section
                    key={card.id}
                    titulo={card.titulo}
                    descricao={card.descricao}
                />
            ))}
        </div>
    )
}
export default Setup