import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import db from "../firebase";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Enviando...");

    try {
      await addDoc(collection(db, "messages"), {
        ...formData,
        createdAt: new Date(),
      });
      setStatus("✅ Mensaje enviado con éxito.");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error al enviar el mensaje:", error);
      setStatus("❌ Ocurrió un error. Intenta más tarde.");
    }
  };

  return (
    <section className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <h2 className="text-center mb-4">Contáctame</h2>
          <form onSubmit={handleSubmit} className="p-4 shadow rounded bg-white">
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Nombre completo</label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                placeholder="Tu nombre"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label">Correo electrónico</label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                placeholder="tucorreo@example.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="message" className="form-label">Mensaje</label>
              <textarea
                className="form-control"
                id="message"
                name="message"
                rows="5"
                placeholder="Escribe tu mensaje aquí..."
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button type="submit" className="btn btn-success w-100">
              Enviar mensaje
            </button>

            {status && (
              <div className="alert alert-info text-center mt-4" role="alert">
                {status}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
