
function data(){
    const hoje = new Date();
    const dia = String(hoje.getDate())
    const mes = String(hoje.getMonth() + 1)
    const ano = hoje.getFullYear();
    return `${dia}/${mes}/${ano}`;
}

export default data ;