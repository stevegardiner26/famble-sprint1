const mongoose = require('mongoose');
const {Schema} = mongoose;

const userSchema = new Schema({
    name: String,
    email: { type: String, unique: true },
    profile_image: String,
    google_id: String,
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

mongoose.model('users', userSchema);