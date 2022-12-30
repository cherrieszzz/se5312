const express = require('express')
const router = express.Router()
const award = require('../models/award')
const students = require('../models/students')

router.get('/:name',(req ,res) => {
    students.findOne({stu_name : req.params.name}, (err, docs) => {
        if(err) res.send(err)
        const findProjectNum = docs.project_num
        award.find({project_num: findProjectNum} ,(err, docs) => {
            if(err) res.send(err)
            res.send(docs)
        })
    })
})

module.exports = router