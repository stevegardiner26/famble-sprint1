const mongoose = require('mongoose');

const { Schema } = mongoose;

const betSchema = new Schema({
  user_id: String,
  game_id: String,
  team_id: String,
  amount: Number,
  active: {type: Boolean, default: true},
  type: String, // Ideally this value is either "default" or "bot"
}, { timestamps: true });

mongoose.model('bets', betSchema);
exports.betModel = mongoose.model('bets', betSchema);
exports.registerBetModel = function() {
    try {
      mongoose.model('bets', betSchema);
    } catch (error) {
      // console.log(error)
    }
}