require('dotenv').config()
const express = require('express')
const helmet = require('helmet')
const path = require('path')

const app = express()

app.use(helmet.contentSecurityPolicy({
    useDefaults: false,
    directives: {
        defaultSrc: helmet.contentSecurityPolicy.dangerouslyDisableDefaultSrc,
        frameAncestors: ['https://thor-demo-saleforce.herokuapp.com'],
    }
}))
app.use(express.static(path.join(__dirname, '/www')))

const PORT = process.env.PORT

app.listen(PORT, () => {
    console.log(`App is listening on PORT ${PORT}`)
})
