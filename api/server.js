const express = require('express')
const server = express()
const helmet = require('helmet')
const cors = require('cors')
const cookieParser = require("cookie-parser")
const authRouter = require("./auth/auth-router")
const usersRouter = require("./users/users-router")
const plantsRouter = require("./plants/plants-router")
const plants2Router = require("./sample/sample-router")
const db = require("./sample/sample-model")
const config = {
    origin: "*"
};

server.use(helmet())
server.use(cors(config));
server.use(express.json())
server.use(cookieParser())

server.use("/api", authRouter)
server.use("/api/account", usersRouter)
server.use("/api/plants", plantsRouter)
server.use("/api2/plants", plants2Router)



server.get("/sample", async (req, res, next) => {
    try{
        db.find()
        .then(plants => {
            res.json(plants)
        })
        .catch(() => {
            res.status(500).json({ message: "The plant information could not be retrieved" })
        });
    }catch(err){
        next(err)
    }
});

server.use((err, req, res, next) => {
    res.status(err.status || 500).json({
      message: err.message,
      stack: err.stack,
    });
});

module.exports = server