import './App.css'
import { NavSetup } from './NavSetup'
import { NavContent } from './NavContent'

function Nav(){
    return(
        <nav className='Nav'>
            <h3>
                Nav da página
            </h3>
            <div nameClasss="link">    
                    {
                        NavContent.map(
                            (content) => <NavSetup
                                key = {content.key}
                                link = {content.link}
                                descricao={content.descricao}
                            />
                        )
                    }
            </div>
        </nav>
    )
}
export default Nav