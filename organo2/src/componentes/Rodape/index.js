import './Rodape.css'


const Rodape = () => {
    return (
        <footer className='rodape'>
            <div>
               <ul>
                    <li>
                        <a href='https://github.com/marquesflavio'> 
                            <img src='./icone-github.png' alt='ícone do github'/>
                            @marquesflavio no GitHub
                        </a>
                    </li>
                    <li>
                        <a href='https://www.linkedin.com/in/msflavio/'>
                            <img src='./icone-linkedin.png' alt='ícone do linkedin'/>
                            @marquesflavio no LinkedIn 
                        </a>
                    </li>
                    <li>
                        <a href='https://www.instagram.com/msflavio/'>
                            <img src='./icone-instagram.png' alt='ícone do instagram'/>
                            @msflavio no Instagram 
                        </a>
                    </li>
               </ul>
            </div>

        </footer>

    )
}

export default Rodape