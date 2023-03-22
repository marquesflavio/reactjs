import Logo from "../Menu/Logo.png"
import "./Menu.css"

const Menu = () => {
    return(
        <nav className="Menu" >
            <a href="/">
                <img className="Logo" src={Logo} alt="Logo da Rockflix"/>
            </a>
        </nav>
    )
}

export default Menu