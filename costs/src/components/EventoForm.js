const EventoForm = () => {

    function cadastrarUsuario(e) {
        e.preventDefault()
    }
    
    function aoAlterado(evento) {
        let dados = evento.target.value
        console.log(`Usuário ${dados} cadastrado`)


    }

    return(
        <div>
            <h1>Evento de submissão de formulário</h1>
            <form onSubmit={cadastrarUsuario} className='formulario' >
                <div><input type='text' placeholder="Digite o seu nome" onChange={aoAlterado}/></div>
                <div><input type='submit' value='Cadastrar' /></div>
            </form>
        </div>

    )
}

export default EventoForm