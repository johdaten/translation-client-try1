import React from 'react';
import './Category.css';
import {Button} from './Button';

const Category = () => {
    return(
        <>
            <div className='category-container'>
                <div className='inner-category-container'>
                    <div className='category-header'>
                        <p className='title ff-century-gothic fs-400 fw-700'>
                            Categoría internacional
                        </p>
                        <p className='subtitle ff-century-gothic fs-600 fw-700'>
                            Traducciones impecables <br/>y manuales
                        </p>
                    </div>
                    <div className='paragraphs-container'>
                        <div className='paragraph-one-container'>
                            <p className='paragraph-one fs-400 fw-500 letter-spacing-5'>
                                Seguro necesitas una traducción efectiva y especial —¡así que estás en el lugar indicado!— Somos un grupo de amantes a los idiomas y los libros. Encontrarás traductores nativos en varios idiomas. Por eso ponemos a su disponibilidad todos nuestro calificativos y una gran pasión.
                            </p>
                            <div className='paragraphs-container-button'>
                                <Button linkTo={'traducciones'}><p>Solicitar Traducción</p></Button>
                            </div>

                            
                        </div>
                        <div className='paragraph-two-container'>
                            <p className='paragraph-two fs-400 fw-500 letter-spacing-5'>
                                También, si necesita una traducción de diez o menos hojas se la podemos enviar en dos días hábiles. Podrás evidenciar todo nuestro corazón en cada trabajo; ya que, además de traducir revisamos cada proyecto mínimo dos ocasiones más.
                            </p>
                        </div>
                    </div>
                </div>
                
            </div>
        </>
    )
}

export default Category;