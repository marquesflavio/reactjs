// FORMA NÃO TÃO INTERESSANTE DE EXECUTAR A FUNÇÃO, REPETE MUITO O PROPS, VER O PESSOA2.JS
const Pessoa = (props) => {
    return(
        <div>
            <img src={props.foto} alt='Foto da pessoa' />
            <h2>Nome: {props.nome} </h2>
            <p>Idade: {props.idade} </p>
            <p> Profissão: {props.profissao} </p>

        </div>
    )
}

export default Pessoa