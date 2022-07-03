import React from "react";
import './Book.css';
import BookYellow from '../icons/category/book-yellow.png';
import BookBlue from '../icons/category/book-blue.png';
import BookRed from '../icons/category/book-red.png';

const Book = () => {
    return(
        <>
            <div className="book-container">
                <div className="book-image">
                    <div className="book-yellow">
                        <img src={BookYellow} alt='book' className=''></img>
                    </div>
                    <img src={BookBlue} alt='book' className='book-blue'></img>
                    <img src={BookRed} alt='book' className='book-red'></img>
                </div>
            </div>
        </>
    )
}

export default Book;