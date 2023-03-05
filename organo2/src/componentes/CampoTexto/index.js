import './CampoTexto.css'


const CampoTexto = (props) => {

    let valor ='Flávio'

    const digitado = (evento) => {
        console.log(evento.target.value)
    }

    return(
        <div className='campo-texto'>
            <label>
                {props.label}
            </label>
            <input value={valor} onChange={digitado} placeholder={props.placeholder} required={props.necessario} ></input>
        </div>
    )
}

export default CampoTexto