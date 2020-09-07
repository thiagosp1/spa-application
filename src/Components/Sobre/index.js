import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'

function Sobre(){
    return(
        <div className="sobre" id="sobre">
            <h1>Bem-vindo a Sobre</h1>
            <h2>Sobre nossa histporia  </h2>
            <Link smooth to="#home">Home</Link>
        </div>
    )
}

export default Sobre;