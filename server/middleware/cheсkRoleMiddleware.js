const jwt = require('jsonwebtoken')

module.exports = function(role){
    return function(req, res, next){
    if(req.method === "OPTIONS"){
        next()
    }
    try {
        const token = req.headers.authorization.split(' ')[1] //Bearer sfsfdsgsg
        if(!token){
            res.status(401).json({message: "Не авторизован!"})
        }
        const decoder = jwt.verify(token, process.env.SECRET_KEY)
        if(decoder.role !== role){
            return res.status(403).json({message: "Нет доступа"})
        }
        req.user = decoder
        next()

    }catch (e){
        res.status(401).json({message: "Не авторизован!"})
       }
    }
}