import React from 'react'
import './Nosotros.css'
import background from '../../icons/svgNosotros/background.svg'
import hello from '../../icons/svgNosotros/hello.svg'
import leftLeaf from '../../icons/svgNosotros/left-leaf.svg'
import leftWheel from '../../icons/svgNosotros/left-wheel.svg'
import manMegaphone from '../../icons/svgNosotros/man-megaphone.svg'
import phone from '../../icons/svgNosotros/phone.svg'
import rightLeaf from '../../icons/svgNosotros/right-leaf.svg'
import rightWheel from '../../icons/svgNosotros/right-wheel.svg'

const Nosotros = () => {
    return (
        <>
            <div className='nosotros-container'>
                <div className='animation'>
                    <img src={hello} alt='hello' className='hello svg'></img>
                    <img src={leftWheel} alt='leftWheel' className='leftWheel svg'></img>
                    <img src={rightWheel} alt='rightWheel' className='rightWheel svg'></img>
                    <img src={manMegaphone} alt='manMegaphone' className='manMegaphone svg'></img>
                    <img src={phone} alt='phone' className='phone svg'></img>
                    <img src={rightLeaf} alt='rightLeaf' className='rightLeaf svg'></img>
                    <img src={leftLeaf} alt='leftLeaf' className='leftLeaf svg'></img>
                    <img src={background} alt='background' className='background svg'></img>
                </div>
                <div className='text'>
                    <div className='text-block'>
                        <h2 className='title'>¿Quiénes somos?</h2>
                        <p className='description'>
                            Somos una asociación que concentra excelentes profesionales 
                            en el área de traducción, interpretación y localización.
                            Nuestro objetivo siempre ha sido y será el de otorgarle el mejor trabajo por parte de nuestros miembros.
                            <br></br>
                            <br></br>
                            La traducción es una profesión antigua y como tal se ha tratado de resolver con tecnología, pero estas herramientas no dotan del tacto que poseen los traductores, quienes agregan ese toque humano y la personalidad deseada a cada proyecto.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Nosotros