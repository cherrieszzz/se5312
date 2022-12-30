const mongoose = require('mongoose')

const Schema = mongoose.Schema

const StudentSchema = new Schema({
    project_num:String,
    stu_name:String
})
const Students = mongoose.model('Students',StudentSchema)

module.exports = Students