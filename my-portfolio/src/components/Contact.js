import React, { useState } from 'react';

const Contact = () => {
  // Estados simples para cada campo
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [service, setService] = useState('');
  const [status, setStatus] = useState('');

  // Manejar envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Enviando...');
    
    try {
      // Envío real al backend
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message, service }),
      });
      
      const data = await response.json();
      
      if (response.ok) {
        setStatus(data.message || 'Mensaje enviado con éxito');
        // Limpiar el formulario después de envío exitoso
        setName('');
        setEmail('');
        setMessage('');
        setService('');
        
        // Ocultar el mensaje después de unos segundos
        setTimeout(() => {
          setStatus('');
        }, 5000);
      } else {
        setStatus(`Error: ${data.message || 'Error desconocido'}`);
      }
    } catch (error) {
      console.error('Error:', error);
      setStatus('Error al conectar con el servidor. Inténtalo más tarde.');
    }
  };

  return (
    <section id="contact" className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-4">Contacto</h2>
        
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card">
              <div className="card-body">
                <h3 className="card-title text-center mb-4">Envíame un mensaje</h3>
                
                {status && (
                  <div className={`alert ${status.includes('Error') ? 'alert-danger' : 'alert-success'}`}>
                    {status}
                  </div>
                )}
                
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">Nombre</label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>
                  
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  
                  <div className="mb-3">
                    <label htmlFor="service" className="form-label">Servicio de interés</label>
                    <select
                      className="form-select"
                      id="service"
                      value={service}
                      onChange={(e) => setService(e.target.value)}
                    >
                      <option value="">Selecciona un servicio</option>
                      <option value="web">Desarrollo Web</option>
                      <option value="data">Visualización de Datos</option>
                      <option value="frontend">Diseño Front-end</option>
                      <option value="mobile">Apps Móviles</option>
                      <option value="deploy">Despliegue</option>
                    </select>
                  </div>
                  
                  <div className="mb-3">
                    <label htmlFor="message" className="form-label">Mensaje</label>
                    <textarea
                      className="form-control"
                      id="message"
                      rows="5"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      required
                    ></textarea>
                  </div>
                  
                  <button type="submit" className="btn btn-primary w-100" disabled={status === 'Enviando...'}>
                    {status === 'Enviando...' ? 'Enviando...' : 'Enviar Mensaje'}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;