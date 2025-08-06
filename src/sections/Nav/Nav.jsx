import { useState, useEffect, useRef } from 'react';
import './Nav.css'
import Logo from '../../assets/images/Logotipo.svg';
import { ReactComponent as LogoWhatsapp } from '../../assets/images/Vector_Whatsapp.svg';
import { ReactComponent as LogoMail } from '../../assets/images/Vector_Mail.svg';
import { PiInstagramLogoFill } from "react-icons/pi";
import { ReactComponent as LogoMenu } from '../../assets/images/icons_menu.svg';

function Nav({ HomeRef, aboutRef, ServicesRef, footerRef }) {
    const [menuOpen, setMenuOpen] = useState(false);
    const menuRef = useRef(null);
    const buttonRef = useRef(null);

    const handleNavClick = (ref) => {
        scrollTo(ref);
        setMenuOpen(false);
    };

    const scrollTo = (ref) => {
        if (!ref.current) return;
        const yOffset = window.innerWidth > 1080 ? -112 : -182;
        const y = ref.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
    }

    //Cerrar persiana por clickear afuera de esta
    const ToggleMenu = (e) => {
        e.stopPropagation();
        setMenuOpen((prev) => !prev);
    };
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (
                menuRef.current &&
                !menuRef.current.contains(e.target) &&
                buttonRef.current &&
                !buttonRef.current.contains(e.target)
            ) {
                setMenuOpen(false);
            }
        };

        document.addEventListener('click', handleClickOutside);
        return () => document.removeEventListener('click', handleClickOutside);
    }, []);

    return (
        <div>
            <nav className='nav'>
                <div className='nav_desplegable'>
                    <button ref={buttonRef} className="menu-toggle" onClick={ToggleMenu}>
                        <LogoMenu className='Logo_Menu'/>
                    </button>
                </div>
                <div className='nav_logo'>
                    <img src={Logo} alt="Logo" />
                </div>
                <ul className="nav_medio desktop">
                    <li className="nav_componentes" onClick={() => handleNavClick(HomeRef)}>Inicio</li>
                    <li className="nav_componentes"onClick={() => handleNavClick(aboutRef)}>Nosotros</li>
                    <li className="nav_componentes" onClick={() => handleNavClick(ServicesRef)}>Servicios</li>
                    <li className="nav_componentes">Blog</li>
                    <li className="nav_componentes" onClick={() => handleNavClick(footerRef)}>Contacto</li>
                </ul>
                <div className='nav_iconos'>
                    <a
                        href="https://wa.me/5491165363661" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        ><LogoWhatsapp className="nav_Logo_Whatsapp"/>
                    </a>
                    <a
                        href="mailto:info@xxx.gmail.com"
                        target="_blank" 
                        rel="noopener noreferrer"
                        ><LogoMail className="nav_Logo_Mail"/>
                    </a>
                    <a
                        href="https://www.instagram.com/estudio.pimsi/"
                        target="_blank" 
                        rel="noopener noreferrer"
                        ><PiInstagramLogoFill size={25} className="nav_Logo_Instagram"/>
                    </a>
                </div>
                <ul 
                    ref={menuRef}
                    className={`nav_medio mobile ${menuOpen ? 'menu-open' : ''}`}
                    onMouseLeave={() => setMenuOpen(false)}
                >
                    <li className="nav_componentes mobile" onClick={() => handleNavClick(HomeRef)}>HOME</li>
                    <li className="nav_componentes mobile"onClick={() => handleNavClick(aboutRef)}>SOBRE NOSOTROS</li>
                    <li className="nav_componentes mobile" onClick={() => handleNavClick(ServicesRef)}>SERVICIOS</li>
                    <li className="nav_componentes mobile">TESTIMONIOS Y EXPERIENCIAS</li>
                    <li className="nav_componentes mobile" onClick={() => handleNavClick(footerRef)}>CONTACTO</li>
                </ul>
            </nav>
        </div>
    );
}


export default Nav;