import './CampoTexto.css'

const CampoTexto = (props) => {
    return(
        <div className='campo-texto'>
            <label>{props.label}</label>
            <input></input>
        </div>
    )
}

export default CampoTexto