const express = require('express')
const router = express.Router()
const direct = require('../models/direct')
const award = require('../models/award')
const { findById } = require('../models/students')

router.get('/:name',(req ,res) => {
    direct.find({direct_tea:req.params.name},(err, docs) => {
        const findAwait = []
        docs.map(value => {
            findAwait.push(value.project_num)
        })
        console.log(findAwait)
        award.find({
            project_num:{$in : findAwait }
        },(err , docs) => {
            res.send(docs)
        })
    })
})

module.exports = router