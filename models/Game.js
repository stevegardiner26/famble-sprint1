const mongoose = require('mongoose');

const { Schema } = mongoose;

const gameSchema = new Schema({
<<<<<<< HEAD
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
    timestamp: {
        
        created_at: {
            type: Date,
            default: ()=> new Date().toISOString()
        },
        updated_at: {
            type: Date,
            default: ()=> new Date().toISOString()
        },
    },
})
=======
  name: String,
  description: String,
});
>>>>>>> master

mongoose.model('games', gameSchema);
