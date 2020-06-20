// models/user-model.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const uniqueValidator = require('mongoose-unique-validator');

let userSchema = new Schema({
  __FIRSTNAME: {
    type: String
  },
  __MIDDLENAME: {
    type: String
  },
  __LASTNAME: {
    type: String
  },
  __EMAIL: {
    type: String,
    unique: true
  }
}, {
  collection: 'users'
});

userSchema.plugin(uniqueValidator, {
  message: 'Email already in use.'
});
module.exports = mongoose.model('User', userSchema);