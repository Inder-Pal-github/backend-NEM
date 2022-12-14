const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
  email:{type:String, required:true},
  password:{type:String, required:true},
  age:{type:String, required:true},
  createdAt:{type:Date,default:Date.now},
})
const UserModel = new mongoose.model("users",UserSchema);
module.exports = {UserModel};
