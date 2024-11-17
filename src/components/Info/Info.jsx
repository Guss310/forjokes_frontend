// This component is a static page with information about the university, its faculties and values.

// This are the dependencies used in this file.
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Negro from '../../assests/images/negro.jpg'


export default function FacultadInfo() {
  return (
    <div className="min-vh-100 d-flex align-items-center" style={{
      backgroundImage: Negro,
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card bg-white bg-opacity-75 shadow-lg">
              <div className="card-body">
                
                <section className="mb-5">
                  <h2 className="border-bottom pb-2 mb-4">Sobre nuestra Universidad</h2>
                  <p className="lead">
                    La Universidad Católica del Uruguay (UCU) es una institución de educación superior privada ubicada en Montevideo, Uruguay. Fundada en 1985, es reconocida como una de las mejores universidades del país.
                  </p>
                  <p className="lead">
                    La UCU también cuenta con un campus en Punta Del este el año 1998, trabajando en la desentralización de la enseñansa intentando realizar un aporte significativo al departamento de Maldonado.
                  </p>
                  <p>
                    Nuestra misión es formar profesionales éticos y competentes, comprometidos con la sociedad y el desarrollo sostenible. A través de la excelencia académica y la investigación, buscamos contribuir al progreso del conocimiento y al bienestar de la comunidad.
                  </p>
                </section>

                <section className="mb-5">
                  <h2 className="border-bottom pb-2 mb-4">Nuestras Facultades</h2>
                  <div className="row">
                    {['Ciencias Humanas', 'Ciencias Empresariales', 'Ingeniería y Tecnologías', 'Derecho', 'Ciencias de la Salud'].map((facultad, index) => (
                      <div key={index} className="col-md-6 mb-3">
                        <div className="card h-100 shadow-sm">
                          <div className="card-body">
                            <h5 className="card-title">Facultad de {facultad}</h5>
                            <p className="card-text">Descubre los programas y oportunidades que ofrece nuestra Facultad de {facultad}.</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                <section className="mb-5">
                  <h2 className="border-bottom pb-2 mb-4">Valores UCU</h2>
                  <div className="row text-center">
                    {['Excelencia', 'Ética', 'Innovación', 'Compromiso Social', 'Diversidad'].map((valor, index) => ( // explicación de esta linea: es un array de 
                      <div key={index} className="col-6 col-md-4 mb-4">
                        <div className="p-3 border rounded shadow-sm h-100 d-flex align-items-center justify-content-center"> 
                          <h5 className="mb-0">{valor}</h5>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                <section className="text-center mt-5">
                  <p className="lead font-italic">
                    "La educación es el arma más poderosa que puedes usar para cambiar el mundo." - Nelson Mandela
                  </p>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}