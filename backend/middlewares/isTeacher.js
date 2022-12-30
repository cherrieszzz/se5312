const jwt = require('jsonwebtoken')

function isTeacher(req, res, next) {
    const token = req.header('x-auth-token')
    if(!token) {
        res.status(401).send("您没有权限做这些")
        return
    }
    try {
        const decoded = jwt.verify(token, "jsonwebtoken")
        req.user = decoded
        if(req.user.auth !== "teacher") {
            res.status(400).send(`权限不符,你的身份为${req.user.auth}`)
            return
        }
        next()
        return
    } catch (ex) {
        res.status(400).send("非法令牌")
        return
    }
}

module.exports = isTeacher