const mongoose = require('mongoose')

const Schema = mongoose.Schema

const teamSchema = new Schema({
    project_num: String,
    admin_name: String,
    team_name: String
})
const team = mongoose.model('team', teamSchema)

module.exports = team