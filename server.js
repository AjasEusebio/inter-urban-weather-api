const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const connectDB = require('./config/db')
const { config } = require('./config')

const authRoutes = require('./routes/authRoutes')
const weatherRoutes = require('./routes/weatherRoutes')

const PORT = config.server.port || 3000

const app = express()

app.use(cors())
app.use(bodyParser.json())

connectDB().then(() => {
  app.use('/auth', authRoutes)
  app.use('/weather', weatherRoutes)

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
  })
}).catch(err => {
  console.error('MongoDB connection error:', err)
  process.exit(1)
})

