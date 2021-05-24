const express = require('express')
const helmet = require('helmet')
const cors = require('cors')
const cookieParser = require("cookie-parser")
const authRouter = require("./auth/auth-router")
const db = require("./sample/sample-model")

const server = express()
server.use(express.json())
server.use(helmet())
server.use(cors())

server.get("/sample", (req, res) => {
  db.find()
      .then(plants => {
          res.json(plants)
      })
      .catch(() => {
          res.status(500).json({ message: "The plant information could not be retrieved" })
      });
});

server.use("/", authRouter)

server.use(cookieParser)

server.use((err, req, res, next) => {
    res.status(err.status || 500).json({
      message: err.message,
      stack: err.stack,
    });
});

module.exports = server