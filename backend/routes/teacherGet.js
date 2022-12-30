const express = require('express')
const router = express.Router()
const direct = require('../models/direct')
const award = require('../models/award')

router.get('/:name',(req ,res) => {
    direct.find({
        direct_tea : req.params.name
    },(err , docs) => {
        if(err) res.send(err)
        res.send(docs)
    })
})

module.exports = router