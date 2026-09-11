import './App.css'
import Nav from './Nav'
import  data  from './Data'
function Footer(){
    return(
        <>
            <div className='Footer' id='contato'>
                <h1>
                    Footer da página
                </h1>
                <Nav/>
            </div>
            <small>Essa página foi criada neste dispositivo em {data()}, originalmente em 09/09/2026.</small>
        </>
    )
}
export default Footer