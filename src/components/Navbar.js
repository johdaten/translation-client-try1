import React, {useState, useEffect} from 'react'
import { Link } from "react-router-dom"
import { GiHamburgerMenu } from 'react-icons/gi'
import { BsX } from 'react-icons/bs'
import './Navbar.css'
import { useLocation } from "react-router-dom"

function Navbar() {
    const [click, setClick] = useState(false)
    const [button, setButton] = useState(true)

    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)
  
    const showButton = () => {
        if (window.innerWidth <= 960) {
          setButton(false);
        } else {
          setButton(true);
        }
      };
   
      useEffect(() => {
        showButton();
      }, []);
      window.addEventListener('resize', showButton);

      // Detecta el cambio de página
    useLocation();

    return (
        <>
            <nav 
                className={`navbar-container ${(document.URL.charAt(document.URL.length - 1) === '/') ? 'transparent' : null}`}
            >
                    <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                            {/* <span className="nav-favicon">
                                <img src="favicon-nav.png" alt="favicon" className="img-favicon"></img>
                            </span> */}
                            <span className='logo-title ff-bodoni-mt ff-ibm-plex-sans fs-600 fw-600 letter-spacing-4'>Dualecto</span>
                    </Link>
                    <div className={`menu-icon ${click ? 'menu-x' : null}`} onClick={handleClick}>
                        <i className='react-icons'>{click ? <BsX/> : <GiHamburgerMenu/>}</i>
                    </div>
            
                    <ul className={click ? 'nav-menu active' : 'nav-menu ff-century-gothic '}>
                        <li className='nav-item before' onClick={closeMobileMenu}>
                        </li>
                        <li className='nav-item letter-spacing-2'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            Inicio
                            </Link>
                        </li>
                        <li className='nav-item letter-spacing-2'>
                            <Link to='/nosotros' className='nav-links' onClick={closeMobileMenu}>
                            Nosotros
                            </Link>
                        </li>
                        <li className='nav-item letter-spacing-2'>
                            <Link to='/traducciones' className='nav-links' onClick={closeMobileMenu}>
                            Traducciones
                            </Link>
                        </li>
                        {/* <li>
                        <Link
                            to='/registrarse'
                            className='nav-links-mobile'
                            onClick={closeMobileMenu}
                        >
                            Registrarse
                        </Link>
                        </li> */}
                    </ul>

                    
                    {/* {button && <Button linkTo='/sign-up' buttonStyle='btn--outline'>Registrarse</Button>} */}
            </nav>
        </>
    )
}

export default Navbar
