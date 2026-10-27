const express = require('express'); 
const cors = require('cors')
const app = express()
const fruits = require('./routes/fruitsRoutes')

app.use(cors())
app.use(express.json()) // Ensures all JSON requests are parsed by express 
app.use('/fruits', fruits)

app.get('/', (req, res) => { // An express response that gets the server to send back a message "Hello World" 
  res.send('Hello Fruity')
})

module.exports = app 