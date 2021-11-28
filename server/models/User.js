const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Create Schema
const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  subject:{
    type: String,
    required: true
  },
  institute:{
    type: String
  },
  password: {
    type: String,
    required: true
  },
  cpassword: {
    type: String,
    required: true
  }
  
});
module.exports = User = mongoose.model("users", UserSchema);