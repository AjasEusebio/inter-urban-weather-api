const dotenv = require('dotenv')
dotenv.config()

const config = {
  server: {
    port: process.env.PORT || 3000,
  },
  weather: {
    url: process.env.WEATHER_API_URL || 'https://api.openweathermap.org/data/2.5',
    apiKey: process.env.WEATHER_API_KEY
  },
  redis: {
    url: process.env.REDIS_URL || 'redis://localhost:6379',
  },
  jwt: {
    secret: process.env.JWT_SECRET,
    expiresIn: process.env.JWT_EXPIRES_IN || '1h'
  },
  reservamos: {
    apiUrl: process.env.RESERVAMOS_API_URL
  },
  mongo: {
    url: process.env.MONGO_URL || 'mongodb://localhost:27017/authdb',
  }
}

module.exports = { config }
