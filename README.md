# Interurban Weather API with Node.js, MongoDB, and Redis

## Table of Contents
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [Development](#development)

## Features
- ✅ User registration/login with JWT
- 🔒 Password hashing with bcrypt
- 🗄️ MongoDB for data storage
- ⚡ Redis for caching
- 🐳 Dockerized environment

## Prerequisites
- Docker 27.5.1 ([Install Docker](https://docs.docker.com/get-docker/))
- Docker Compose v2.32.4 (comes with Docker)
- Node.js v22.12.0 ([Install Node.js](https://nodejs.org/))
- npm 10.9.0

## Installation
1. Clone the repo:
```bash
git clone https://github.com/AjasEusebio/inter-urban-weather-api.git
```
```bash
cd inter-urban-weather-api
```

2. Set Up Environment Variables
```bash
cp .env.example .env
```

3. Start the Services with Docker
```bash
docker-compose up -d redis
docker-compose up -d mongodb
```
4. Verify all containers are running
```bash
docker-compose ps
```

# Running the Application

## Development
```bash
npm install
npm run dev
```
#
# Cómo utilicé la Inteligencia Artificial (IA) para acelerar mi desarrollo.

**Herramientas usadas**
- Copilot
- DeepSeek
- ChatGPT

## Solución rápida de problemas técnicos

**Detección de errores**: La IA analizó mis problemas de conexión con MongoDB y Redis en Docker, sugiriendo configuraciones óptimas:
- Health checks
- Variables de entorno  
- Timeouts

**Ejemplo concreto**:  
*"Mi contenedor de MongoDB no iniciaba"* - La IA me proporcionó el fragmento exacto para `docker-compose.yml` con:
- Verificación del health check  
- Reinicios automáticos

## Generación Automatizada de Código

**Plantillas listas para usar**: Obtuve estructuras completas para:
- APIs REST con Express (controladores, rutas, middlewares)  
- Schemas de Mongoose con validaciones  

**Ejemplo concreto**:  
*"Necesitaba JWT auth en Node.js"* - La IA generó el código completo con signup/login, incluyendo bcrypt para hashing y manejo de errores.

## Optimización de Arquitectura

**Patrones sugeridos**:
- Caching con Redis  
- Conexiones persistentes a DB con manejo de errores  
- Separación clara de capas (controllers/services/models)  

**Beneficio**:  
Mejora notable en optimización de peticiones gracias al caching sugerido por la IA.

## Aprendizaje Acelerado
- Implementé features en horas en lugar de días  
- Mejoras de código: Consultas sobre optimización de fragmentos + uso de Copilot en VSCode  

## Lecciones Clave
1. **Precisión en prompts**: Soluciones mejores con preguntas específicas y con contexto  
2. **Iteración rápida**: La IA me permitió probar múltiples enfoques técnicos en minutos  
3. **Validación cruzada**: Siempre contrasté las sugerencias con documentación oficial  
