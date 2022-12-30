const express = require('express')
const router = express.Router()
const admin = require('../models/admin')
const jwt = require('jsonwebtoken')
const students = require('../models/students')
const teacher = require('../models/teacher')


router.post('/', async (req, res) => {
    if(req.body.auth == "stu") {
        const result = await students.find({stu_name : req.body.name})
        if(result.length == 0) {
            res.status(400).send("不存在")
            return
        }
        const token = jwt.sign({name:req.body.name, auth:'stu'},"jsonwebtoken")
        res.header('x-auth-token',token).status(200).send(token)
        return
    }
    if(req.body.auth == "teacher") {
        const result = await teacher.find({direct_tea : req.body.name})
        if(result.length == 0) {
            res.status(400).send("不存在")
            return
        }
        const token = jwt.sign({name:req.body.name, auth:'teacher'},"jsonwebtoken")
        res.header('x-auth-token',token).status(200).send(token)
        return
    }
    if(req.body.auth == "admin") {
        const result = await admin.find({admin_name : req.body.name, password:req.body.password})
        if(result.length == 0) {
            res.status(400).send("不存在")
            return
        }
        const token = jwt.sign({name:req.body.name, auth:'admin'},"jsonwebtoken")
        res.header('x-auth-token',token).status(200).send(token)
        return
    }

    res.status(400).send("请提供合法的身份")
    return
})

module.exports = router