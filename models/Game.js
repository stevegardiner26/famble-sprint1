const mongoose = require('mongoose');
const {Schema} = mongoose;

const gameSchema = new Schema({
    name: String,
    description: String,
})

mongoose.model('games', gameSchema);