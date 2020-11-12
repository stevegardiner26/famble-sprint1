const mongoose = require('mongoose');

const { Schema } = mongoose;

const gameSchema = new Schema({
    sport_type: String,
    start_time: Date,
    winner: String,
    team_home_id: String,
    team_away_id: String,
    canceled: Boolean,
    status: String,
    score_id: Number
}, {timestamps: true})

mongoose.model('games', gameSchema);
