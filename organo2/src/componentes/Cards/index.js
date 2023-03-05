import './Cards.css'

const Cards = (props) => {
    return (
        <section className='card'>
            <h3>{props.cards}</h3>
        </section>
    )
}

export default Cards