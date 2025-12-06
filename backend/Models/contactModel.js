const mongoose =require('mongoose');

contactSchema = mongoose.Schema({
    name:String,
    email:String,
    subject:String,
    message:String
});

contactModel = mongoose.model('contact',contactSchema);

module.exports = contactModel;