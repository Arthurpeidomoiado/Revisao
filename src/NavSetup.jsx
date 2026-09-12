export function NavSetup({img, descricao, link}){
    return(
        <ul>
            <img src={img} width='4%'/>
            <a href={link}>{descricao}</a>
        </ul>
    )
}
