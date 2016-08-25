// load the things we need
var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
    fName: String,
    lName: String,
    email: String,
    password: String,
    maketId: Number,
});

// create the model for users and expose it to our app
module.exports = mongoose.model('User', userSchema);
