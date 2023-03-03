import CampoTexto from '../CampoTexto'
import './Formulario.css'


const Formulario = () => {
    return(
        <form>
            <h2>Preencha os dados para criar o card dos seus livros</h2>
            <CampoTexto
                onbrigatorio={true}
                label="Nome do Livro"
                input='text'
                 
            />

            <CampoTexto
                label="Autor" 
               
            />

            <CampoTexto
                label="Nome" 
               
            />

        </form>

    )
}

export default Formulario