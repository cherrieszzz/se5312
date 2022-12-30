const express = require('express')
const router = express.Router()
const Students = require('../models/students')

router.get('/',(req, res) => {
    console.log("router are running")
    Students.find({},(error , students) => {
        if(error) {
            console.log(error)
        }
        res.send(students)
    })
})

router.get('/:id', async (req, res) => {
    const result = await Students.findById(req.params.id)
    res.send(result)
})

router.post('/',async (req ,res) => {
    const newStu = new Students({
        project_num:req.body.project_num,
        stu_name:req.body.stu_name
    })
    const result = await newStu.save()
    res.send(result)
})

router.put('/:id',async(req, res) => {

})

router.delete('/:id',(req, res) => {
    console.log(req.params.id)
    Students.deleteOne({
        _id:req.params.id
    },(err) => {
        res.send(err)
    })
})

module.exports = router



