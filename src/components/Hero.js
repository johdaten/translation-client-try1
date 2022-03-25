import React from 'react'
import './Hero.css';
// import Earth from './Earth';
import {Button} from './Button';
import slide1 from '../icons/slide1.svg'
import slide2 from '../icons/slide2.svg'
import slide3 from '../icons/slide3.svg'
import pie0 from '../icons/pie0.svg'
import Earth from './Earth.js'
import {IoLogoWhatsapp} from 'react-icons/io'

function Hero() {
    
    return (
      <>
      <div className='hero'>
        <div className='slides-container'>
          <img src={slide1} alt='slide1' className='slide1 images'></img>
          <h1 className='lang es' >ESPAÑOL</h1>
          <img src={slide2} alt='slide2' className='slide2 images'></img>
          <h1 className='lang en'>ENGLISH</h1>
          <img src={slide3} alt='slide3' className='slide3 images'></img>
          <h1 className='lang de'>DEUTSCHE</h1>
          {/* <h1 className='word-counter'>
            <span className='word-counter-es'>ES</span>
            <span className='word-counter-en'>EN</span>
            <span className='word-counter-de'>DE</span>
          </h1> */}
        </div>
        <Earth className='earth-component'/>
        <div className='pie-full-container'>
          <div className='pie-container'>
            <img src={pie0} alt='pie0' className='pie0'></img>
          </div>
          <div className='hero-message'>
            <h3 className="message">
              <span className='message-info'>
              Contáctenos al whatsapp
              o cotice dando click
              </span>
              <span className="whatsapp-info">
                {/* WhatsApp icon */}
                  <a
                    href="https://wa.me/5930992314818"
                    class="whatsapp_float"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i class="fa fa-whatsapp whatsapp-icon fa-4x"></i>
                  </a>

                {/* <IoLogoWhatsapp className="whatsapp-icon"/>  */}
              {/* <span className="whatsapp-link link"> 0992314818 </span> */}
            </span>
            </h3>
          </div>
        </div>
        <div className='whatsapp-cell'>
          <a
            href="https://wa.me/5930992314818"
            class="whatsapp_float "
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fa fa-whatsapp whatsapp-icon fa-3x"></i>
          </a>
        </div>
        <div className='hero-btns'>
          <Button
            className='btns pedido'
            buttonStyle='btn--outline'
            buttonSize='btn--large'
            linkTo= '/traduccion'
            >
            Cotiza Aquí
          </Button>
        </div>
      
      </div>
      </>
    )
}

export default Hero
