const { model, Schema} = require('../connections');

const mySchema = new Schema({
    name : String,
    email : String,
    password : String,
    location : {type : String, default : 'Not Specified'},
});

module.exports = model('users' , mySchema);