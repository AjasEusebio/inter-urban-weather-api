const express = require('express')
const authenticate = require('../middlewares/authMiddleware')
const weatherController = require('../controllers/weatherController')

const router = express.Router()

router.get('/', authenticate, weatherController.getWeatherCities)
router.get('/detail', authenticate, weatherController.getWeatherDetails)

module.exports = router
