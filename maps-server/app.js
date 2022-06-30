require("dotenv/config")
require("./db")
const { capitalized } = require("./utils")


const express = require("express")
const app = express()

require("./config")(app)

app.locals.appTitle = `RestaurApp_`

require("./routes/index.routes")(app)

require("./error-handling")(app)

module.exports = app