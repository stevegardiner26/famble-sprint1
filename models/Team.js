const mongoose = require('mongoose');
const {Schema} = mongoose;

const teamSchema = new Schema({
    team_id: {type: Number, unique: true},
    name: String,
    key: String,
    conference: String,
    division: String,
    stadium_id: Number
}, {timestamps: true})

mongoose.model('teams', teamSchema);

exports.registerTeamModel = function() {
    try {
      mongoose.model('teams', teamSchema);
    } catch (error) {
      // console.log(error)
    }
}
