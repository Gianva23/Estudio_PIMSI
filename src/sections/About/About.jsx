import './About.css'
import Group_18 from '../../assets/images/Group_18.png';
import imagen3 from '../../assets/images/imagen.jpg';
import imagen4 from '../../assets/images/imagen.jpg';
import imagen5 from '../../assets/images/imagen.jpg';

function About() {
    return (
        <div className="About-container">
            <div className="About-container-flex">
                <div>
                    <p className='About-Titulo1'>SOBRE NOSOTROS</p>
                    <p className='About-Titulo2'>¿Por qué elegirnos?</p>
                    <p className='About-Texto'>Trabajamos con un enfoque estratégico y normativo, asegurando cumplimiento, eficiencia y sostenibilidad en cada proyecto? negocio?</p>
                    <p className='About-Texto'>Nuestro compromiso es acompañar a las empresas? con conocimiento y responsabilidad, minimizando riesgos y garantizando soluciones a medida para un crecimiento seguro y sostenible.</p>
                </div> 
                <div className='img-detalle'>
                    <img src={Group_18} alt="worker" className="img-about"/>
                    <div className="paralelogramo1"></div>
                    <div className="paralelogramo2"></div>
                    <div className="paralelogramo3"></div>
                </div>
            </div>
            <p className='title-container-personas'>NUESTRO EQUIPO</p>
            <div className="About-container-personas">
                <div className='About-nos'>
                    <img src={imagen3} alt="worker" className="img-nos"/>
                    <div className='About-info'>
                        <p className='About-nombre'>María Paz Boeri</p>
                        <p className='About-titulo'>Técnica superior en Gestoría</p>
                    </div>
                </div>
                <div className='About-nos'>
                    <img src={imagen4} alt="worker" className="img-nos"/>
                    <div className='About-info'>
                        <p className='About-nombre'>Matías Fidalgo</p>
                        <p className='About-titulo'>Lic. en Seguridad e Higiene</p>
                    </div>
                </div>
                <div className='About-nos'>
                    <img src={imagen5} alt="worker" className="img-nos"/>
                    <div className='About-info'>
                        <p className='About-nombre'>Tomás Agustín Boeri</p>
                        <p className='About-titulo'>Maestro Mayor de Obra</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;