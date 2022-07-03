import React from 'react';
import './Flags.css'
import Earth from './Earth.js'
import Brazil from '../icons/flags/brazil.svg';
import England from '../icons/flags/england.svg';
import France from '../icons/flags/france.svg';
import Germany from '../icons/flags/germany.svg';
import Spain from '../icons/flags/spain.svg';
import Usa from '../icons/flags/usa.svg';

const Flags = () => {
    return(
        <>
        <div className='hero-flags-container'>
          <div className='flags-container'>
            <div className='flags-one'>
              <Earth/>
            </div>
            <div className='flags-two'>
              <div className='brazil'>
                <img src={Brazil} alt='Brazil' ></img>
              </div>
              <div className='england'>
                <img src={England} alt='England' ></img>
              </div>
            </div>
            <dic className='flags-three'>
              <div className='france'>
              <img src={France} alt='France' ></img>
                </div>
              <div className='germany'>
                <img src={Germany} alt='Germany' ></img>
              </div>
            </dic>
            <div className='flags-four'>
              <div className='spain'>
                <img src={Spain} alt='Spain' ></img>
              </div>
              <div className='usa'>
                <img src={Usa} alt='USA' ></img>
              </div>
            </div>
          </div>
        </div>
        </>
    )
}

export default Flags;