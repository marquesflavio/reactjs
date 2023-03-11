import Item from "./Item"


const List = () => {
    return(
        <>
            <h1>Minha Lista</h1>
            <ul>
                <li>
                    <Item marca='Ferrari' ano_modelo={1964} />
                    <Item marca='Bugatti' ano_modelo={1990} />
                </li>
            </ul>

            {/* A marca tem o propType definido como string, se colocar um number, gera um warning do DevTools */}
        
        </>
    )
}

export default List