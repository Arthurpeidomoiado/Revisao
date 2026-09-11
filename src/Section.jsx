import SetupSection from "./Setup_Section";
import { SectionContent } from "./Section_Content";
import './App.css'
function Section() {
    return (
        <>
            <div className='Section' id='section'>
                {
                    SectionContent.map((content)=>(
                        <SetupSection
                            key={content.id}
                            titulo={content.titulo}
                            texto={content.texto}
                            img={content.img}
                            status={content.status}
                        />
                        )
                    )
                }
            </div>
        </>
    );
}
export default Section