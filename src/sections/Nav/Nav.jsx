import './Nav.css'
import Logo from '../../assets/images/Logo-EVL.svg';
import { IoLogoWhatsapp } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { PiInstagramLogoFill } from "react-icons/pi";

function Nav({ HomeRef, aboutRef, ServicesRef, footerRef }) {
    const scrollTo = (ref) => {
        ref.current?.scrollIntoView({ behavior: 'smooth' });
    }

    return (
        <div>
            <nav className='nav'>
                <div className='nav_logo'>
                    <img src={Logo} alt="Logo" />
                </div>
                <ul className="nav_medio">
                    <li className="nav_componentes" onClick={() => scrollTo(HomeRef)}>Inicio</li>
                    <li className="nav_componentes"onClick={() => scrollTo(aboutRef)}>Nosotros</li>
                    <li className="nav_componentes" onClick={() => scrollTo(ServicesRef)}>Servicios</li>
                    <li className="nav_componentes">Blog</li>
                    <li className="nav_componentes" onClick={() => scrollTo(footerRef)}>Contacto</li>
                </ul>
                <div className='nav_iconos'>
                    <a
                        href="https://wa.me/5491165363661" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        ><IoLogoWhatsapp size={25}/>
                    </a>
                    <a
                        href="mailto:info@xxx.gmail.com"
                        target="_blank" 
                        rel="noopener noreferrer"
                        ><MdEmail size={25}/>
                    </a>
                    <a
                        href="https://www.instagram.com/estudio.pimsi/"
                        target="_blank" 
                        rel="noopener noreferrer"
                        ><PiInstagramLogoFill size={25}/>
                    </a>
                </div>
            </nav>
        </div>
    );
}


export default Nav;