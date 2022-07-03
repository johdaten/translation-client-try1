import React from "react";
import './Features.css';
import Pen from './Pen.js'

const Features = () => {
    return (
        <>
            <div className="features-container">
                <div className="inner-features-container">
                    <div className="features-container-header">
                        <div className="features-container-header-title ff-century-gothic fs-400 fw-700">
                        El mejor precio
                        </div>
                        <div className="features-container-header-subtitle ff-century-gothic fs-600 fw-700">
                            $10 por cada página 
                        </div>
                        <div className="features-container-header-paragraph fs-400 fw-400 letter-spacing-5">
                        Nos esforzamos en crear una simple tarifa para todos; <br/>
                        por eso, cobramos tan solo $10 por traducir cada hoja.
                        </div>
                    </div>
                    <div className="features-container-animation">
                        <div className="typing-animation">
                        <p className="typewriter-animation">
                            ¡Hola, bienvenidos a Dualecto!
                        </p>
                        </div>
                    </div>
                </div>
            </div>     
        </>
    )
}

export default Features;