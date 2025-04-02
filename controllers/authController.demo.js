const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { config } = require('../config');
const users = []

const secretKey = config.jwt.secret

exports.signUp = async (req, res) => {
  const { username, email, password } = req.body
  if (!username || !password || !email) {
    return res.status(400).json({ message: 'Username, email and password are required' })
  }

  const existingUser = users.find(user => user.email === email)
  if (existingUser) {
    return res.status(400).json({ message: 'User already exists' })
  }

  const hashedPassword = await bcrypt.hash(password, 10)
  const newUser = { username, email, password: hashedPassword }
  users.push(newUser)
  console.log("SECRET:_", secretKey)
  const token = jwt.sign({ email }, secretKey, { expiresIn: '1h' })
  res.json({ token })
}

exports.signIn = async (req, res) => {
  const { email, password } = req.body
  console.log(req.body)
  if (!email || !password) {
    return res.status(400).json({ message: 'email and password are required' })
  }

  const user = users.find(user => user.email === email)
  if (!user) {
    return res.status(401).json({ message: 'Invalid credentials' })
  }

  const isPasswordValid = await bcrypt.compare(password, user.password)
  if (!isPasswordValid) {
    return res.status(401).json({ message: 'Invalid credentials' })
  }

  const token = jwt.sign({ email }, secretKey, { expiresIn: '1h' })
  res.json({ token })
}
