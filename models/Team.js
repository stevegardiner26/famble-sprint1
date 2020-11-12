const mongoose = require('mongoose');
const {Schema} = mongoose;

const teamSchema = new Schema({
    team_id: Number,
    name: String,
    key: String,
    conference: String,
    division: String,
    stadium_id: Number
}, {timestamps: true})

mongoose.model('teams', teamSchema);