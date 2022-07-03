import React from 'react';
import './Footer.css';
import { Link } from "react-router-dom";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import Typography from '@material-ui/core/Typography';

function Copyright() {
    return (
      <Typography variant="body1" color="#24293e" align="center">
        {'Copyright © Dualecto '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
}

const Footer = () =>{
    return(
        <>
            <div className='footer-wrapper-container'>
                <div className='footer-container'>
                    <div className='footer-left'>
                        <div>
                        <a
                            href="https://wa.me/5930992314818"
                            class="whatsapp_float"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <WhatsAppIcon  sx={{position: 'relative', top: '1px', height:'24px', marginRight:'4px'}}/>
                            <span>WhatsApp</span>
                        </a>
                        </div>
                        <div>
                            <a 
                                aria-label='E-Mail'
                                href='mailto:dualectosa@gmail.com'
                            >
                                <MailOutlineIcon  sx={{position: 'relative', top: '1px', height:'24px', marginRight:'4px'}}/>
                                <span>E-Mail</span>
                            </a>                
                        </div>
                    </div>
                    <div className='footer-center'>
                        <div className='footer-title ff-bodoni-mt ff-ibm-plex-sans fs-600 fw-600 letter-spacing-4'>
                            Dualecto
                        </div>
                    </div>
                    <div className='footer-right'>
                        <div className='links-container'>
                            <div>
                                <Link to='/nosotros'>
                                    Nosotros
                                </Link>
                            </div>
                            <div>
                                <Link to='/traducciones'>
                                    Traducciones
                                </Link>
                            </div>
                            <div>
                                <Link to='/terminosycondiciones'>
                                    Términos y Condiciones
                                </Link>
                            </div>
                        </div>
                        
                    </div>
                    <div className='footer-copyright'>
                        {Copyright()}                    
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;
