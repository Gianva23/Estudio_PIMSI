import './Services.css'
import { useState, useEffect } from 'react';
import Card from '../../components/Card/Card'
import wind_farms_fields from '../../assets/images/wind_farms_fields.png';
import employees_working_warehouse from '../../assets/images/employees_working_warehouse.png';
import imagen_home from '../../assets/images/imagen_home.png';
import imagencard4 from '../../assets/images/imagen.jpg';

function Services() {
    const [tick, setTick] = useState(0);

    useEffect(() => {
        const forceRender = () => setTick(prev => prev + 1);
        window.addEventListener('resize', forceRender);
        return () => {
            window.removeEventListener('resize', forceRender);
        };
    }, []);

    return (
        <div className="container-services">
            <p className='Services-title'>NUESTROS SERVICIOS</p>
            <p className='Services-title2'>Te brindamos la mejor solución</p>
            <div className='container-cards'>
                <Card key={`${1}-${tick}`}
                    frontContent={
                        <div className='card-inner-front'>
                            <img src={wind_farms_fields} alt="Gestion-Ambiental" className="img-card"/>
                            <p className='title-card-inner'>Gestión Ambiental</p>
                        </div>
                    } 
                    backContent={
                        <div className='card-inner-back'>
                            <p>Auditorías ambientales.</p>
                            <p>Residuos especiales.</p>
                            <p>Efluentes (Líquidos y Gaseosos).</p>
                            <p>Estudio de Impacto Ambiental.</p>
                            <p>Estudio de Impacto Urbanístico.</p>
                            <p>Aparatos Sometidos a Presión.</p>
                        </div>
                    } 
                />
                <Card key={`${2}-${tick}`}
                    frontContent={
                        <div className='card-inner-front'>
                            <img src={employees_working_warehouse} alt="Gestion-Ambiental" className="img-card"/>
                            <p className='title-card-inner'>Industria y Comercio</p>
                        </div>
                    } 
                    backContent={
                        <div className='card-inner-back'>
                            <p>Habilitaciones municipales.</p>
                            <p>Planos de Obra.</p>
                            <p>Categorización Industrial (Ley 11.459).</p>
                            <p>Planos de Electromecánica.</p>
                            <p>Mediciones de Puesta a tierra - Res SRT 900/15.</p>
                            <p>Estudio de carga de fuego.</p>
                            <p>Croquis de Habilitación.</p>
                        </div>
                    }
                />
                <Card key={`${3}-${tick}`}
                    frontContent={
                        <div className='card-inner-front'>
                            <img src={imagen_home} alt="Gestion-Ambiental" className="img-card"/>
                            <p className='title-card-inner'>Higiene y Seguridad</p>
                        </div>
                    }
                    backContent={
                        <div className='card-inner-back'>
                            <p>Industria y Obras.</p>
                            <p>Planos contra incendios y vías de evacuación.</p>
                            <p>Ergonomía - Res 886/15.</p>
                            <p>Planes de evacuación (Ley 5.920).</p>
                            <p>Sistema de Autoprotección.</p>
                            <p>Profesional registrado en Defensa Civil.</p>
                            <p>Software CYPE FDS (Simulación Dinámica de Incendio).</p>
                            <p>Capacitaciones específicas.</p>
                            <p>Mediciones de contaminantes en el ambiente laboral.</p>
                            <p>Venta y recarga de matafuegos.</p>
                        </div>
                    }
                />
            </div>
        </div>
    );
}

export default Services