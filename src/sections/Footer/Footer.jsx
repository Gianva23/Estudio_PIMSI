import './Footer.css'
import { PiMapPinFill } from "react-icons/pi";
import { FaRegClock } from "react-icons/fa6";
import { BsTelephoneFill } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdEmail } from "react-icons/md";

function Footer() {
    return (
        <div className='container-footer'>
            <div className='flex-footer-top'>
                <p className='contact-title'>Contactános</p>
                <div style={{width:'881px'}}></div>
            </div>
            <div className='flex-footer-bottom'>
                <div className='footer-contact'>
                    <div className='contact'>
                        <a className='contact-detail'
                            href="https://www.google.com/maps/place/Av. Maipú 2671, B1602 Vicente López, Provincia de Buenos Aires" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            ><PiMapPinFill size={23}/>
                            <p className='maps-detail'>{"Av. Maipú 2671 (Oficina 21)\nOlivos, Vicente López"}</p>
                        </a>
                    </div>
                    
                    <div className='contact'>
                        <a className='contact-detail'
                            ><FaRegClock size={21} />
                            <p>{"Lunes a Viernes\nDe 08:00 Hs a 16:00 Hs"}</p>
                        </a>
                    </div>
                    
                    <div className='contact'>
                        <a className='contact-detail'
                            href="tel:5491147963477"
                            ><BsTelephoneFill size={19}/>
                            <p>4796 3477</p>
                        </a>
                    </div>
                    
                    <div className='contact'>
                        <a className='contact-detail'
                            href="https://wa.me/5491165363661" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            ><IoLogoWhatsapp size={23}/>
                            <p>15 6536 3661</p>
                        </a>
                    </div>
                    
                    <div className='contact'>
                        <a className='contact-detail'
                            href="mailto:info@xxx.gmail.com"
                            target="_blank" 
                            rel="noopener noreferrer"
                            ><MdEmail size={24}/>
                            <p>info@xxx.gmail.com</p>
                        </a>
                    </div>
                </div>
                <form className="footer-form">
                    <div className="container-form-group">
                        <div className="form-group">
                            <input type="text" name="nombre" placeholder='Nombre' required />
                        </div>

                        <div className="form-group">
                            <input type="email" name="email" placeholder='Dirección del correo electrónico' required />
                        </div>
                    </div>
                    <div className="container-form-group">
                        <div className="form-group">
                            <input type="tel" name="telefono" placeholder='Teléfono' />
                        </div>

                        <div className="form-group">
                            <input type="text" name="empresa" placeholder='Nombre de la empresa'/>
                        </div>
                    </div>
                    <textarea id="mensaje" rows="6" placeholder='Mensaje' required />
                    <button className='botoncito' type="submit">Enviar {'>'}</button>
                </form>
            </div>
        </div>
    );
}

export default Footer;