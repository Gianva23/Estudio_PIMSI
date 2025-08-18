import { useRef } from 'react';
import './Contact.css'

function Contact({footerRef}) {

    const handleNavClick = (ref) => {
        scrollTo(ref);
    };

    const scrollTo = (ref) => {
        if (!ref.current) return;
        const yOffset = window.innerWidth > 1080 ? -112 : -182;
        const y = ref.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
    }

    return (
        <div className='contact-container'>
            <div className='detalle-1080'>
                <div className="paralelogramo4"></div>
                <div className="paralelogramo5"></div>
                <div className="paralelogramo6"></div>
            </div>
            <div className='img-back'></div>
            <div className='img-filtro-contact'></div>
            <div className='contact-container-title'>Solicitá una cotización</div>
            <button className='contact-boton' onClick={() => handleNavClick(footerRef)}><span>Contáctanos</span></button>
        </div>
    );
}
export default Contact