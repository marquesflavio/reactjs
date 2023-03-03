import CampoTexto from '../CampoTexto'
import './Formulario.css'


const Formulario = () => {
    return (
        <section className='formulario'>
            <form>
                <h2>Preencha os dados para criar o card dos seus livros</h2>
                <CampoTexto
                    onbrigatorio={true}
                    label="Nome do Livro"
                    placeholder="Digite o nome do livro..."

                />
                <CampoTexto
                    label="Autor"
                    placeholder="Digite o nome do autor..."

                />
            </form>
        </section>

    )
}

export default Formulario