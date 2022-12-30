const express = require('express')
const router = express.Router()
const award = require('../models/award')
const students = require('../models/students')
const isStu = require('../middlewares/isStu')

router.get('/',isStu, (req ,res) => {
    students.find({stu_name : req.user.name}, (err, docs) => {
        if(err) res.send(err)
        const findNum = []
        docs.map(value => {
            findNum.push(value.project_num)
        })
        console.log(findNum)
        award.find({project_num: { $in : findNum }} ,(err, docs) => {
            if(err) res.send(err)
            res.send(docs)
        })
    })
})

module.exports = router