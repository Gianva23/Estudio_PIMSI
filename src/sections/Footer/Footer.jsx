import './Footer.css'
import { ReactComponent as LogoUbicación } from '../../assets/images/Vector_Ubicación.svg';
import { ReactComponent as LogoReloj } from '../../assets/images/Vector_Reloj.svg';
import { ReactComponent as LogoNumCelular } from '../../assets/images/Vector_Núm_Celular.svg';
import { ReactComponent as LogoWhatsapp } from '../../assets/images/Vector_Whatsapp.svg';
import { ReactComponent as LogoMail } from '../../assets/images/Vector_Mail.svg';

function Footer() {
    return (
        <div className='footer'>
            <div className='container-footer'>
                <div className='flex-footer-top'>
                    <p className='contact-title'>Contactános</p>
                </div>
                <div className='flex-footer-bottom'>
                    <div className='footer-contact'>
                        <div className='columna1'>
                            <div className='contact'>
                                <a className='contact-detail'
                                    href="https://www.google.com/maps/place/Av. Maipú 2671, B1602 Vicente López, Provincia de Buenos Aires" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    ><LogoUbicación />
                                    <p className='maps-detail'>{"Av. Maipú 2671 (Oficina 21)\nOlivos, Vicente López"}</p>
                                </a>
                            </div>
                            
                            <div className='contact'>
                                <a className='contact-detail'
                                    ><LogoReloj/>
                                    <p>{"Lunes a Viernes\nDe 08:00 Hs a 16:00 Hs"}</p>
                                </a>
                            </div>
                        </div>
                        <div className='columna2'>
                            <div className='contact'>
                                <a className='contact-detail'
                                    href="tel:5491147963477"
                                    ><LogoNumCelular/>
                                    <p>4796 3477</p>
                                </a>
                            </div>
                            
                            <div className='contact'>
                                <a className='contact-detail'
                                    href="https://wa.me/5491165363661" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    ><LogoWhatsapp/>
                                    <p>15 6536 3661</p>
                                </a>
                            </div>
                            
                            <div className='contact'>
                                <a className='contact-detail'
                                    href="mailto:info@xxx.gmail.com"
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    ><LogoMail/>
                                    <p>info@xxx.gmail.com</p>
                                </a>
                            </div>
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
                                <input type="tel" pattern="[0-9]*" inputmode="numeric" name="telefono" placeholder='Teléfono'/>
                            </div>

                            <div className="form-group">
                                <input type="text" name="empresa" placeholder='Nombre de la empresa'/>
                            </div>
                        </div>
                        <textarea id="mensaje" rows="6" placeholder='Mensaje' required />
                        <button className='boton-form' type="submit">Enviar</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Footer;