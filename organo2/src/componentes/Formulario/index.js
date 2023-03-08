import CampoTexto from '../CampoTexto'
import './Formulario.css'

const Formulario = () => {
    return(
        <section className='formulario'>
            <CampoTexto
                label='Nome do Livro'
                />
            
                <CampoTexto
                label='Autor'
            
                />
                <CampoTexto
                label='Gênero'
            
                />
        </section>
    )
}
export default Formulario