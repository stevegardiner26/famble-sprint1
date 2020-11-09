const mongoose = require('mongoose');
const {Schema} = mongoose;

const teamSchema = new Schema({
    name: String
})

mongoose.model('teams', teamSchema);