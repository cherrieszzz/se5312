const express  = require('express')
const app = express()
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose')
const port = 8082
const students = require('./routes/students')
const config = require('./config.json')
const teacher = require('./routes/teacher')

app.use(express.json())
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/students',students)
app.use('/teacher',teacher)

mongoose.connect(config.db_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, err => {
    if (err) throw err;
    console.log('Connected to MongoDB!!!')
})

app.get('/api',(req ,res) => {
    res.send("APi running")
})

app.listen(port,() => {
    console.log("api running on port",port)
})