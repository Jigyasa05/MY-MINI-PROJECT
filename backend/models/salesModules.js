const { model, Schema} = require('../connections');

const mySchema = new Schema({
    Shopname : String,
    Category : String,
    Saledescription : String,
    Offer : String, 
    Address : String,
    Startdata : String,
    Enddata : String,
    Contact : String,
    Image : String,
    location : {type : String, default : 'Not Specified'},
});

module.exports = model('users' , mySchema);