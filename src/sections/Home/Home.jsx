import './Home.css'
import Group_10 from '../../assets/images/Group_10.png';
function Home() {
    return (
        <div className="home-container">
            <div className='img-back'></div>
            <div className='img-filtro'></div>
            <div className='home-cosas'>
                <p className='home-texto'>Soluciones integrales para tu comercio</p>
                <p className='home-texto2'>Somos una consultora especializada en brindar herramientas necesarias y eficientes para mejorar tu negocio</p>
                <button className='boton'><span>Nuestros servicios</span></button>
            </div>
        </div>
    );
}

export default Home;