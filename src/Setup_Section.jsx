import "./App.css"
import { Status } from "./data/Status.jsx"
function SetupSection({ id, titulo, texto, img, status }) {
    return(
        <div className="card">
            <div style={{backgroundImage : `url(${img})`} } className="Topo_do_Card">
                <p>{id}</p>
                <p className="card">Status: <span><Status string={status}/></span></p>
            </div>
            <div className="Fundo_do_Card">
                <h2>{titulo}</h2>
                <p>{texto}</p>
                <footer>{status}</footer>
            </div>
        </div>
        
    )
}
export default SetupSection;