const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const contactRoutes = require('./routes/contact');
const { initializeApp } = require('firebase/app');
const { getFirestore } = require('firebase/firestore');

const app = express();
const port = process.env.PORT || 5000;

// Configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCKWOU9L8IktfGMIh3ZNB5zjxzs2bBofbc",
  authDomain: "my-portfolio-b4662.firebaseapp.com",
  projectId: "my-portfolio-b4662",
  storageBucket: "my-portfolio-b4662.firebasestorage.app",
  messagingSenderId: "528579117148",
  appId: "1:528579117148:web:97eaf9f8792535fafd2699",
  measurementId: "G-ER4MF231YH"
};


// Inicializar Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Rutas
app.use('/api/contact', contactRoutes);

// Ruta de prueba
app.get('/', (req, res) => {
  res.send('API del servidor funcionando correctamente con Firebase');
});

// Iniciar servidor
app.listen(port, () => {
  console.log(`Servidor ejecutándose en http://localhost:${port}`);
});

// Exportar la base de datos para usarla en otros archivos
module.exports = db;