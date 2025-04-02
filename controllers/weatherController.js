const axios = require('axios')
const { config } = require('../config')
const { CacheManager } = require('../config/redisClient')

const getWeather = async (lat, lon) => {
  const cachekey = `weather:${lat},${lon}`
  const cacheManager = new CacheManager(config.redis.url)

  try {
    await cacheManager.initialize()
    await cacheManager.connect()
    const cacheData = await cacheManager.get(cachekey)
    if (cacheData) {
      return cacheData
    }

    const weatherResponse = await axios.get(`${config.weather.url}/weather?lat=${lat}&lon=${lon}&appid=${config.weather.apiKey}&units=metric`)
    const weatherData = await weatherResponse.data
    await cacheManager.set(cachekey, weatherData, 60)
    return weatherData
  } catch (error) {
    return {}
  }
}

const getWeatherCities = async (req, res) => {
  const cachekey = 'weather:cities'
  const cacheManager = new CacheManager(config.redis.url)
  try {
    await cacheManager.initialize()
    await cacheManager.connect()

    const cacheData = await cacheManager.get(cachekey)

    if (cacheData) {
      return res.json(cacheData)
    }

    const citiesResponse = await axios.get(`${config.reservamos.apiUrl}`)
    const filteredCities = citiesResponse.data
      .filter(city => city.result_type === 'city')
      .sort((a, b) => parseFloat(b.popularity) - parseFloat(a.popularity))

    const weatherReports = await Promise.all(
      filteredCities.map(async (city) => {
        const lat = city.lat
        const lon = city.long
        const weather = await getWeather(lat, lon)
        return {
          ...city, weather
        }
      })
    )

    await cacheManager.set(cachekey, weatherReports, 10)

    res.json(weatherReports)
  } catch (error) {
    res.status(500).json({ message: 'Error fetching cities data: ' + error.message })
  }
}

const getWeatherDetails = async (req, res) => {
  const { lat, lon } = req.query
  const cachekey = `forecast:${lat},${lon}`
  const cacheManager = new CacheManager(config.redis.url)
  try {
    await cacheManager.initialize()
    await cacheManager.connect()
    const cacheData = await cacheManager.get(cachekey)
    if (cacheData) {
      return res.json(cacheData)
    }

    const weatherResponse = await axios.get(`${config.weather.url}/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${config.weather.apiKey}`)
    await cacheManager.set(cachekey, weatherResponse.data, 60)
    res.json(weatherResponse.data)
  } catch (error) {
    res.status(500).json({ message: 'Error fetching weather data: ' })
  }
}

module.exports = {
  getWeatherCities,
  getWeatherDetails
}
