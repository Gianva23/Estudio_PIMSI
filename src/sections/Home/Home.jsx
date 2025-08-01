import { useState, useEffect, useRef } from 'react';
import './Home.css'
import img1 from '../../assets/images/Group_10.png';
import img2 from '../../assets/images/Group_11.png';

const backgroundImages = [img1, img2];

function Home() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const intervalRef = useRef(null);

    const startAutoSlide = () => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
        }
        intervalRef.current = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % backgroundImages.length);
        }, 10000);
    };

    const handleDotClick = (index) => {
        setCurrentIndex(index);
    };

    useEffect(() => {
        startAutoSlide();
        return () => clearInterval(intervalRef.current);
    }, [currentIndex]);

    return (
        <div className="home-container">
            {backgroundImages.map((src, idx) => (
                <div
                    key={idx}
                    className="img-back-slide"
                    style={{
                        backgroundImage: `url(${src})`,
                        left: `${(idx - currentIndex) * 100}%`,
                        transition: "left 1.5s ease-in-out",
                    }}
                ></div>
            ))}
            <div className='img-filtro'></div>
            <div className='img-dots'>
                {backgroundImages.map((_, i) => (
                    <button
                        key={i}
                        className={`dot ${i === currentIndex ? "active" : ""}`}
                        onClick={() => handleDotClick(i)}
                    ></button>
                ))}
            </div>
            <div className='home-cosas'>
                <p className='home-texto'>Soluciones integrales para tu comercio</p>
                <p className='home-texto2'>Somos una consultora especializada en brindar herramientas necesarias y eficientes para mejorar tu negocio</p>
                <button className='boton'><span>Nuestros servicios</span></button>
            </div>
        </div>
    );
}

export default Home;