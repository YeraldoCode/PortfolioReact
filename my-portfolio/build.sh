#!/bin/bash

# Construir el frontend
echo "Instalando dependencias del frontend..."
npm install
echo "Construyendo la aplicación React..."
npm run build

# Configurar el backend
echo "Instalando dependencias del backend..."
cd server
npm install