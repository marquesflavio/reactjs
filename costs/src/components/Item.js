//Garantindo que as props tenham tipos.

import PropTypes from 'prop-types'

const Item = ({marca, ano_modelo}) => {
    return(
        <>
            <ul>
                <li>
                    {marca} - {ano_modelo}
                </li>
            </ul>       
        </>
    )
}

Item.propTypes = {
    marca: PropTypes.string.isRequired, // Passei aqui que o PropTypes 'marca'precisa ser uma string e é obrigatório preenchimento, são validações a tempo de programação.
    ano_modelo: PropTypes.number
}

Item.defaultProps = { //valor padrão para os props.
    marca: 'Faltou a marca',
    ano_lancamento: '0'
}
export default Item