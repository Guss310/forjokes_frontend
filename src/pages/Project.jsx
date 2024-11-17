// This page is a simple page that shows the project information.

// This dependencies are used in this file.
import React from "react";
import { Container, Card } from 'react-bootstrap';
import Banner from '../../src/assests/images/fondo-banner-naranja.jpg'

// This is the main function of the Project page.
export const Project = () => {
    return (
        <div style={{ backgroundColor: '#e0f7fa', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <div style={{ backgroundColor: '#000', minHeight: '10vh', color: '#fff', padding: '10px', textAlign: 'center' }}>
            </div>
            <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <img src={Banner} alt="Project Image" style={{ borderRadius: '10px', padding: '20px', boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2), 0 12px 40px rgba(0, 0, 0, 0.2)', textAlign: 'center' }}/>
                <div style={{ position: 'absolute', top: '75%', left: '50%', transform: 'translate(-50%, -50%)', color: '#fff', textAlign: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)', padding: '20px', borderRadius: '10px' }}>
                        <h2 className="mt-3">¿Por qué esta plataforma?</h2>
                        
                        <p>
                            Esta red social ha sido creada como parte de un proyecto del segundo año del programa de Desarrollo de Software, con el objetivo de emular las funcionalidades de plataformas como Reddit. Sin embargo, no se trata solo de un ejercicio académico; es un espacio versátil que busca enriquecer tanto el aprendizaje como el entretenimiento de los estudiantes.

                            Un Proyecto Académico Innovador: Desarrollar esta plataforma nos ha permitido aplicar los conocimientos adquiridos en clase sobre tecnologías como React.js y React Native, así como aprender sobre la construcción de bases de datos y el desarrollo de APIs. Este proceso práctico es fundamental para nuestra formación como desarrolladores.

                            Espacio de Aprendizaje y Entretenimiento.
                        </p>
                    </div>
            </div>
        </div>
    );
}


export default Project;