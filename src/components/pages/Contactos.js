import React from "react";
import Traduccion from './Traduccion'
import {MdEmail} from 'react-icons/md'
import {IoLogoWhatsapp} from 'react-icons/io'
import './Contactos.css'

const Contactos = () => {
    return (
        <>
            <div className="contactos-container">   
                <div className='email'>
                    <p className="email-text">Contáctenos y le responderemos con urgencia a nuestro 
                    <br/> 
                    <IoLogoWhatsapp className="whatsapp-icon"/> WhatsApp: 
                    <span className="whatsapp-link link"> 0992314818</span>
                    <br/>
                    <MdEmail className="email-icon"/> email: 
                    <span className="email-link link"> dualectosa@gmail.com</span> 
                    <br/>
                    o envíe un archivo a continuación.
                    </p>
                </div>
                <div className='pedidos'>
                    <Traduccion/>
                </div>
            </div>
        </>
    )
}

export default Contactos
