import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import './Formulario.css'


const Formulario = () => {
    return (
        <section className='formulario'>
            <form>
                <h2>Preencha os dados para criar o card dos seus livros favoritos</h2>
                <CampoTexto
                    necessario={true}
                    label="Nome do Livro"
                    placeholder="Digite o nome do livro..."
                    

                />
                <CampoTexto
                    necessario={true}
                    label="Autor"
                    placeholder="Digite o nome do autor..."


                />
                <Botao 
                children
                />
                
            </form>
        </section>

    )
}

export default Formulario