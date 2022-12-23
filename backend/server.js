const express  = require('express')
const app = express()
const router = express.Router()
const mongoose = require('mongoose')
const port = 8082
const stu = require('./routes/students')
const URI = 'mongodb+srv://zpyqaq:zpy020923@cluster0.6d1um.mongodb.net/db_lab?retryWrites=true&w=majority';
const Students = require('./models/students')

mongoose.connect(URI, {
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

app.use('/',router)

app.listen(port,() => {
    console.log("api running on port",port)
})