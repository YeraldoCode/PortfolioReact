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
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: process.env.FIREBASE_MEASUREMENT_ID
};


// Inicializar Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

// Configurar CORS para permitir solicitudes desde el dominio del frontend
const corsOptions = {
    origin: 'https://my-portfolio-b4662.web.app', // Dominio del frontend
    optionsSuccessStatus: 200
};
app.use(cors(corsOptions));

// Middleware para analizar solicitudes JSON
app.use(bodyParser.json());

// Rutas
app.use('/api/contact', contactRoutes);


//Servir archivos estáticos de React en producción
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../build')));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../build', 'index.html'));
  });
}

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