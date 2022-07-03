import React from 'react';
import './Pen.css';
import PenOne from '../icons/pen/pen-one.svg';
import PenTwo from '../icons/pen/pen-two.svg';

const Pen = () => {
    return(
        <>
            <div className='pen-animation-container'>
                <div className='pen-one-container'>
                    <img src={PenOne} alt='pen' className=''></img>
                </div>
                <div className='pen-two-container'>
                    <img src={PenTwo} alt='pen' className=''></img>
                </div>
            </div>
        </>
    )
}

export default Pen