import './CampoTexto.css'


const CampoTexto = (props) => {
    const placeholderModificada = `Digite seu ${props.placeholder}...`
    return(
        <div className='campo-texto'>
            <label>{props.label}</label>
            <input placeholder={placeholderModificada}></input>
        </div>
    )
}

export default CampoTexto