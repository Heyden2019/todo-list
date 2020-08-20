import express from 'express'
import routes from './routes/routes'
import os from "os"
import cors from "cors"
const path = require('path')
const bodyParser = require("body-parser")

const app = express()
const port = process.env.PORT || 9000
app.set('port', port)
const db = require('./routes/queries')

const staticDir = path.join(__dirname, 'frontend/build')
app.use(express.static(staticDir))

app.use(cors())

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

routes(app, db)

app.listen(port, () => {
  console.log('App server running at http://' + os.hostname() + ':' + port)
})

