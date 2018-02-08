const mongoose = require('mongoose')
//destructuring
const { Schema } = mongoose;

const userSchema = new Schema({
	googleID: String
});

mongoose.model('users', userSchema);
