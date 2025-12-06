const mongoose =require('mongoose');

signupSchema = mongoose.Schema({
    email:String,
    password:String
},{ timestamps: true });

signupModels = mongoose.model('signup',signupSchema);

module.exports = signupModels;