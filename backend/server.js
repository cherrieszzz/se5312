const express  = require('express')
const app = express()
const router = express.Router()
const mongoose = require('mongoose')
const port = 8082
const stu = require('./routes/students')
const Students = require('./models/students')
const config = require('./config.json')

app.use(express.json())

mongoose.connect(config.db_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, err => {
    if (err) throw err;
    console.log('Connected to MongoDB!!!')
})

router.get('/',(req, res) => {
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

app.get('/api',(req ,res) => {
    res.send("APi running")
})

app.post('/add',(req, res) => { 
    res.send(req.body.name)
})

app.listen(port,() => {
    console.log("api running on port",port)
})