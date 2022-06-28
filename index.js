require('dotenv').config()
const express = require('express')
const path = require('path')
const app = express()

app.use(express.static(path.join(__dirname, '/build')))

const PORT = process.env.PORT

app.listen(PORT, () => {
    console.log(`App is listening on PORT ${PORT}`)
})
