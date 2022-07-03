import React from 'react';
import './Gradient.css'

const Gradient = () => {
    var time = Math.random();
    const randomDelay = () => {
        return Math.random() * 1.5;
    }
    return(
        <>
            <div className='gradient-container'>
                <div
                    style={{animationDelay: {randomDelay}}}
                ></div>
                <div
                    style={{animationDelay: {randomDelay}}}
                ></div>
                <div
                    style={{animationDelay: {randomDelay}}}
                ></div>
                <div
                    style={{animationDelay: {randomDelay}}}
                ></div>
            </div>
        </>
    )
}

export default Gradient;