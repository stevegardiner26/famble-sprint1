const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema({
  name: String,
  email: String,
  profile_image: String,
  google_id: { type: String, unique: true },
});

mongoose.model('users', userSchema);
