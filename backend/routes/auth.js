const express = require('express')
const router = express.Router()
const admin = require('../models/admin')
const jwt = require('jsonwebtoken')

router.post('/',(req, res) => {
    admin.findOne({
        admin_name:req.body.admin_name,
        password:req.body.password
    },(err, docs) => {
        if(err) res.send(err)
        if(docs) {
            const token = jwt.sign({
                _id:docs._id
            },'jsonwebtoken')
            res.send(token)
        }
    })
})

module.exports = router