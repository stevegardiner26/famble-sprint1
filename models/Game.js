const mongoose = require('mongoose');

const { Schema } = mongoose;

const gameSchema = new Schema({
    name: String,
    description: String,
    sport_type: String,
    start_time: {
        type: Date,
        default: ()=> new Date().toISOString()
    },
    winner: String,
    team_one_id: String,
    team_two_id: String,
    timestamps: true,
})

mongoose.model('games', gameSchema);
