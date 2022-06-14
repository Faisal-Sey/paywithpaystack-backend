
const { payment } = require('../models')
const db = require('../models')
const axios = require('axios').default
const SECRET_KEY = require('../utils/sk').SECRET_KEY
console.log(SECRET_KEY)


const Payment = db.payment

const verifyPayment = async(req, res) => {

  let info = {
    email: req.body.email,
    first_name: req.body.fname,
    last_name: req.body.lname,
    amount: req.body.amount,
    reference: req.body.reference,
  } 

  axios({
    method: 'get',
    url: `https://api.paystack.co/transaction/verify/${info.reference}`,
    headers: {
      Authorization: `Bearer ${SECRET_KEY}`
    }
  }).then(async function (response) {
    if (response.data.data.status === 'success') {

      delete info.reference
      info.id = response.data.data.id
      info.channel = response.data.data.channel
      info.number = response.data.data.authorization.last4

      const payment = await Payment.create(info)
      console.log(payment)

      res.status(200).send("Payment Successful")
    }

  })
  .catch(function (error) {
    console.log(error)
    res.status(500).send(error)
  })

}

const getAllPayments = async(req, res) => {

  let payments = await Payment.findAll({
    attributes: [
      'first_name',
      'last_name',
      'email',
      'payment_channel',
      'amount',
      'number',
    ]
  })

  res.status(200).send(payments)

}

module.exports = {
  verifyPayment,
  getAllPayments,
}