const express = require('express')
const helmet = require('helmet')
const cors = require('cors')
const cookieParser = require("cookie-parser")
const authRouter = require("./auth/auth-router")

const server = express()
server.use(express.json())
server.use(helmet())
server.use(cors())

server.use("/", authRouter)

server.use(cookieParser)

server.use((err, req, res, next) => {
    res.status(err.status || 500).json({
      message: err.message,
      stack: err.stack,
    });
});

module.exports = server