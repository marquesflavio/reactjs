import { useState } from 'react'
import './Formulario.css'
import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'



const Formulario = () => {

    const generos = [
        'Aventura',
        'Fantasia',
        'Época',
        'Investigação',
        'Romance'
    ]

    const aoSalvar = (submissao) => {
        submissao.preventDefault()

    }

    const [livro, setLivro] = useState('')
    const [autor, setAutor] = useState('')
    
    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar} >
                <h2>Preencha os dados para criar o card dos seus livros favoritos</h2>
                <CampoTexto
                    necessario={true}
                    label="Nome do Livro"
                    placeholder="Digite o nome do livro..."
                    valor={livro}
                    alterado={valor => setLivro(valor)}

                />
                <CampoTexto
                    necessario={true}
                    label="Autor"
                    placeholder="Digite o nome do autor..."
                    valor={autor}
                    alterado={valor => setAutor(valor)}

                />
                <ListaSuspensa 
                    itens={generos}
                    label="Gêneros"
                
                />
                <Botao 
                children

                />
            </form>
        </section>

    )
}

export default Formulario