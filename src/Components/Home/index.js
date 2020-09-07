import React from 'react'
import Inicio from '../Inicio'
import Contato from '../Contato'
import Sobre  from '../Sobre'

function Home(){
    return(
        <div>
            <Inicio/>
            <Sobre/>
            <Contato/>
        </div>
    )
}

export default Home;