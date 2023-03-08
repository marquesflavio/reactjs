//Destructuring
//DESTA FORMA FICA MELHOR DE APRESENTAR DO QUE ESTÁ NO ARQUIVO PESSOA.JS 
const Pessoa2 = ({nome, foto, idade, profissao}) => {
    return(
        <div>
            <img src={foto} alt='Foto da pessoa' />
            <h2>Nome: {nome} </h2>
            <p>Idade: {idade} </p>
            <p> Profissão: {profissao} </p>

        </div>
    )
}

export default Pessoa2