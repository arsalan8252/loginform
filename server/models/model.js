const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type:String, required: true, unique: true },
  password : { type: String, required: true }
});

const myModel = mongoose.model('register', postSchema);
module.exports = myModel; 