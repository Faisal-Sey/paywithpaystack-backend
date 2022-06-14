
const userController = require("../controllers/userController")
const paymentController = require("../controllers/paymentController")


const router = require("express").Router()

// user
router.post('/register', userController.register)
router.post('/login', userController.login)
router.post('/change_password', userController.changePassword)
router.get('/users', userController.getUsers)
router.get('/user/:id', userController.getUser)
router.delete('/user/:id', userController.deleteUser)

// payments
router.post('/verify_payment', paymentController.verifyPayment)
router.get('/payments', paymentController.getAllPayments)



module.exports = router