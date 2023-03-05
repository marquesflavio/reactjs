import './CampoTexto.css'


const CampoTexto = (props) => {

    const digitado = (e) => {
        props.alterado(e.target.value)
    }

    return(
        <div className='campo-texto'>
            <label>
                {props.label}
            </label>
            <input value={props.valor} onChange={digitado} placeholder={props.placeholder} required={props.necessario} ></input>
        </div>
    )
}

export default CampoTexto