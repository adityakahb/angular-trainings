// models/user-model.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const uniqueValidator = require('mongoose-unique-validator');

let authSchema = new Schema({
  __EMAIL: {
    type: String,
    unique: true
  },
  __PASSWORD: {
    type: String
  }
}, {
  collection: 'auth'
});

authSchema.plugin(uniqueValidator, {
  message: 'Email already in use.'
});
module.exports = mongoose.model('Auth', authSchema);