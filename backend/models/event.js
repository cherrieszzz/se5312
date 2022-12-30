const mongoose = require('mongoose')

const eventSchema = new mongoose.Schema({
        project_num: String,
        admin_name: String,
        team_name: String
})

const event = mongoose.model('event', eventSchema)

module.exports = event