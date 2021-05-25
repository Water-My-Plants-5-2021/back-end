const jwt = require("jsonwebtoken")
const restricted = (req, res, next) => {
    const { token } = req.cookies
    if(!token){
        return res.status(401).json({
            message: "Token required"
        })
    }else{
        jwt.verify(token, process.env.SECRET, (err, decoded) => {
            if(err){
                return res.status(401).json({
                    message: "Token invalid"
                })
            }else{
                req.token = decoded
            }
        })
        next()
    }
}

module.exports = {
    restricted
}