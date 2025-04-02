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
