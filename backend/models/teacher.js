const mongoose = require('mongoose')
const Schema = mongoose.Schema

const TeacherSchma = new Schema({
    collage:String,
    direct_tea:String
})

const Teacher = mongoose.model('teacher',TeacherSchma,'teachers')

module.exports = Teacher