const express = require('express')
const cors = require('cors')


const app = express()

const corOptions = {
  origin: 'http://localhost:3000'
}


// middlewares
app.use(cors(corOptions))

app.use(express.json())

app.use(express.urlencoded({ extended: true }))


// routers

const router = require('./routes/userRouter')
app.use('/api', router)

// testing api

app.get("/", (req, res) => {
  res.json({ message: "hello world" })
})


// port

const PORT = process.env.PORT || 8080

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
} )

module.exports = app