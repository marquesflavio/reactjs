const Evento = ({numero}) => {

    function meuEvento () {
        console.log(`Opa, fui clicado! ${numero}`)
    }

    return(
        <>
        <h1>Testando eventos</h1>
        <button onClick={meuEvento}>Clique aqui!  </button>
        </>

    )
}
export default Evento