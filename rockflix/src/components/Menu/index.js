import Logo from "../Menu/Logo.png"
import ButtonLink from './components/ButtonLink'
import "./Menu.css"

const Menu = () => {
    return(
        <nav className="Menu" >
            <a href="/">
                <img className="Logo" src={Logo} alt="Logo da Rockflix"/>
            </a>

            <ButtonLink className="ButtonLink" href="/">
                Novo Vídeo
            </ButtonLink>


        </nav>
    )
}

export default Menu