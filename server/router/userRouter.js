const  Router = require('express')
const router = new Router()
const UserConrollers = require('../controllers/userController')
const authMiddlware = require('../middleware/authMiddleware')

router.post('/registration', UserConrollers.registration)
router.post('/login', UserConrollers.login)
router.get('/auth', authMiddlware, UserConrollers.check)

module.exports = router