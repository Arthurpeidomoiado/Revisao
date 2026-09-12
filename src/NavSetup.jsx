export function NavSetup({img, descricao, link}){
    return(
        <div>
            <img src={img} width='4%' />
            <a href={link} className="link">{descricao}</a>
        </div>
    )
}
