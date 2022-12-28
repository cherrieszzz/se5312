const express = require('express')
const router = express.Router()
const Students = require('../models/students')
const mongoose = require('mongoose')

router.get('/',(req, res) => {
    console.log("router are running")
    Students.find({},(error , students) => {
        if(error) {
            console.log(error)
        }
        res.send({
            students
        })
    })
})

router.post('/',async (req ,res) => {
    const newStu = new Students({
        project_name:req.body.project_name,
        stu_name:req.body.stu_name
    })
    const result = await newStu.save()
    res.send(result)
})

module.exports = router



