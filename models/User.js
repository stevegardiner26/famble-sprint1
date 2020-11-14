const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema({
    name: String,
    email: { type: String, unique: true },
    profile_image: String,
    google_id: String,
    shreddit_balance: {type: Number, default: 10000}
}, {timestamps: true})


mongoose.model('users', userSchema);

exports.registerUserModel = function() {
    try {
      mongoose.model('users', userSchema);
    } catch (error) {
      // console.log(error)
    }
}
