import React from 'react'
import './Inicio.css'
import Hero from '../Hero'
import Flags from '../Flags'
import Category from '../Category'
import Features from '../Features'
import Footer from '../Footer'

function Inicio() {
    return (
        <>
            <div className='inicio-container'>
                <Hero/>
                <Flags/>
                <Category/>
                <Features/>
            </div>
        </>
    )
}

export default Inicio
