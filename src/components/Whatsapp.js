import React from 'react'
import './Whatsapp.css'
import whatsappLogo from '../icons/whatsapp-logo.svg'

function Whatsapp() {
    return(
        <>
            <div className='whatsapp-container'>
                <div className='call-to-action'>
                    Contactos
                </div>
                <div className='icon-container'>
                    <img src={whatsappLogo} alt='whatsapp-icon' className='whatsapp-icon'></img>
                </div>
            </div>
        </>
    )
}

export default Whatsapp