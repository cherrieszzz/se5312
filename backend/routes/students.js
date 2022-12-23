const express = require('express')
var router = express.Router()
const Students = require('../models/students')
const mongoose = require('mongoose')

router.get('/stu',(req, res) => {
    console.log("router are running")
    Students.find({},'project_num stu_name',(error , students) => {
        if(error) {
            console.log(error)
        }
        res.send({
            students
        })
    })
})

module.exports = router



