require('dotenv').config()
const express = require('express')
const helmet = require('helmet')
const path = require('path')

const app = express()

app.use(helmet.frameguard({ action: 'DENY' }))
app.use(express.static(path.join(__dirname, '/build')))

const PORT = process.env.PORT

app.listen(PORT, () => {
    console.log(`App is listening on PORT ${PORT}`)
})
