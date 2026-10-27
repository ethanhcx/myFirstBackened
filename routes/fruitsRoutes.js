const express = require('express')
const router = express.Router()
const fruits = require('../controllers/fruitsControllers')

router.get('/',fruits.index) // This means the route applies to all fruits
router.get('/:name', fruits.show)
router.post('/', fruits.create)
router.patch('/:name', fruits.update) // /:name means it will apply to only a specific fruit that the user inputs
router.delete('/:name', fruits.destroy)

module.exports = router 
