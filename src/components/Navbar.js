import React, {useState, useEffect} from 'react'
import { Link } from "react-router-dom"
import { GiHamburgerMenu } from 'react-icons/gi';
import { BsXSquareFill } from 'react-icons/bs'
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
                className={`navbar ${(document.URL.charAt(document.URL.length - 1) === '/') ? 'transparent' : null}`}
                >
                <div className='navbar-container'>
                    <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                            <span className='logo-title'>DUALECTO</span>
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className='react-icons'>{click ? <BsXSquareFill/> : <GiHamburgerMenu/>}</i>
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            Inicio
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/nosotros' className='nav-links' onClick={closeMobileMenu}>
                            Nosotros
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/contactos' className='nav-links' onClick={closeMobileMenu}>
                            Contactos
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
                </div>
            </nav>
        </>
    )
}

export default Navbar
