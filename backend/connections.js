const mongoose = require('mongoose');

const url ="mongodb+srv://Jigyasa:9670433951@cluster0.lzlixjn.mongodb.net/MINIProject?retryWrites=true&w=majority"

mongoose.connect(url)
.then((result) => {
    console.log('database connected');
    
}).catch((err) => {
    console.log(err);
    
});


module.exports = mongoose;