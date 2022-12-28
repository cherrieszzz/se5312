const express = require('express')
const router = express.Router()
const Teacher = require('../models/teacher')
const mongoose = require('mongoose')

router.get('/',(req, res) => {
    console.log("router are running")
    Teacher.find({},(error , teacher) => {
        if(error) {
            console.log(error)
        }
        res.send({
            teacher
        })
    })
})

module.exports = router