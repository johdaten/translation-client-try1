import React from 'react'
import './Hero.css';
import Checkout from './pages/form/Checkout'
import Gradient from './Gradient.js'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const Hero = () => {
  return (
    <>
    <div className='hero'>
      <div className='hero-header-container'>
        <div className='gradient'>
          <Gradient/>
        </div>
        <div className='checkout-container'>
          <Checkout/>
        </div>
        <div className='hero-header-title '>
          <p className='fs-800 fw-700 ff-century-gothic letter-spacing-4'>
            Traductores profesionales a un Click
          </p>
          <div className='hero-header-subtitle fs-400 fw-500 ff-ibm-plex-sans letter-spacing-5'>
            <span>
              En menos de un minuto, puedes hacer un pedido o cotizar 
              <br/>
              tu orden. Traducimos a varios idiomas websites, documentos, libros, vídeos y mucho más.
            </span>
          </div>
          <div className='hero-header-info'>
            <span className='whatsapp-component'>
              <a
                href="https://wa.me/5930992314818"
                class="whatsapp_float"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className='icon-link-container'>
                  <span >Más información al Whatsapp </span>
                  <span className='arrow-icon'><ArrowForwardIosIcon sx={{position: 'relative', top: '1px', height:'16px'}}/></span>
                  <span className='whatsapp-logo'><WhatsAppIcon sx={{position: 'relative', top: '1px', height:'20px'}}/></span>
                </div>
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Hero
