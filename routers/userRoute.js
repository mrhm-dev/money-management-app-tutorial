const router = require('express').Router()

const {login, register, allUser} = require('../controllers/userController')

// Registration Route
// localhost:4000/api/users/register
router.post('/register', register)

// Login Route
// localhost:4000/api/users/login
router.post('/login', login)
router.get('/all', allUser)

module.exports = router