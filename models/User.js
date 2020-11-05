const mongoose = require('mongoose');
const {Schema} = mongoose;

const userSchema = new Schema({
    name: String,
    email: { type: String, unique: true },
    profile_image: String,
    google_id: String
})

mongoose.model('users', userSchema);