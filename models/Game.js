const mongoose = require('mongoose');

const { Schema } = mongoose;

const gameSchema = new Schema({
  game_id: { type: Number, unique: true },
  sport_type: String,
  start_time: Date,
  winner: String,
  home_team_id: Number,
  away_team_id: Number,
  canceled: Boolean,
  status: String,
  away_score: Number,
  home_score: Number,
  in_progress: Boolean,
  end_time: Date,
}, { timestamps: true });

mongoose.model('games', gameSchema);
exports.gameModel = mongoose.model('games', gameSchema);
exports.registerGameModel = function() {
    try {
      mongoose.model('games', gameSchema);
    } catch (error) {
      // console.log(error)
    }
}