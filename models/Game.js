const mongoose = require('mongoose');

const { Schema } = mongoose;

const gameSchema = new Schema({
    game_id: {type: Number, unique: true},
    sport_type: String,
    start_time: Date,
    winner: String,
    team_home_id: Number,
    team_away_id: Number,
    canceled: Boolean,
    status: String,
    score_id: Number
}, {timestamps: true})

mongoose.model('games', gameSchema);
