import React from 'react'

const ButtonLink = (props) => {
// props => { className: "o que alguém passar"}

    return(
        <a className={props.className} href={props.href}>
            {props.children}   
        </a>
    )
}

export default ButtonLink