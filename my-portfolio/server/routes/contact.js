const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');

// Configurar el transporter de nodemailer
// Para este ejemplo, usaremos una cuenta de prueba
// En producción, deberías usar tus propias credenciales
const transporter = nodemailer.createTransport({
  host: 'smtp.ethereal.email',  // Servicio de prueba
  port: 587,
  secure: false,
  auth: {
    user: 'martinezyeraldo4@gmail.com', // Reemplaza con tu cuenta de prueba
    pass: 'txtxg zebp gegh khbh'              // Reemplaza con tu contraseña
  }
});

// Ruta para enviar emails
router.post('/', async (req, res) => {
  try {
    const { name, email, message, service } = req.body;

    // Validaciones básicas
    if (!name || !email || !message) {
      return res.status(400).json({ message: 'Todos los campos son obligatorios' });
    }

    // Log de los datos recibidos
    console.log('Datos recibidos:', { name, email, message, service });

    // Configurar el correo
    const mailOptions = {
      from: email,
      to: 'martinezyeraldo4@gmail.com', // Reemplaza con tu correo
      subject: `Nuevo mensaje de contacto de ${name}`,
      html: `
        <h3>Nuevo mensaje de contacto</h3>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Servicio de interés:</strong> ${service || 'No especificado'}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${message}</p>
      `
    };

    // Enviar el correo (comentado para ejemplo, descomenta en producción)
    /*
    await transporter.sendMail(mailOptions);
    */

    // Simular envío exitoso para ejemplo
    console.log('Email enviado correctamente (simulado)');
    
    // Responder al cliente
    res.status(200).json({ message: '¡Mensaje enviado con éxito! Te contactaré pronto.' });
  } catch (error) {
    console.error('Error al procesar el mensaje:', error);
    res.status(500).json({ message: 'Error al enviar el mensaje. Por favor, inténtalo más tarde.' });
  }
});

module.exports = router;