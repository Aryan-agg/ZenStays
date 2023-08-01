// const mongoose= require('mongoose');
// const {Schema} =mongoose;

// const UserSchema = new Schema({
//     name:String,
//     email:{type:String, unique: true},
//     password:String
// });


// const UserModel = mongoose.model('User',UserSchema);

// module.exports= UserModel;


// //,


const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
    name: String,
    email: String,
    password: String
});

// Create a model based on the schema
const User = mongoose.model('User', UserSchema);

// Apply a unique index to the email field
// UserSchema.index({ email: 1 }, { unique: true });

// Export the User model
module.exports = User;
