const jwt = require('jsonwebtoken')

module.exports = function (req,res, next) {
    if (req.method === "OPTIONS") {
        next()
    }
    try {
        const token = req.headers.autorization.split(' ')[1]
        if (!token) {
            return res.status(401).json({message: ''})
        }
    }
}