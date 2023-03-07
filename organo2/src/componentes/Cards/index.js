import './Cards.css'

const Cards = (props) => {
    return (
        <section className='card' style={{backgroundColor: props.corSecundaria}}>
            <h3 style={{backgroundColor: props.corPrimaria}}>{props.cards}</h3>
        </section>
    )
}

export default Cards