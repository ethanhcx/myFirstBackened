require('dotenv').config()
const app = require('./app')
const port = process.env.PORT


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`) // A message to make sure that express is working correctly
})




