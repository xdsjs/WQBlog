'use strict';

module.exports = app => {
  const mongoose = app.mongoose;
  const UserSchema = new mongoose.Schema({
    userName: { type: String },
    passWord: { type: String },
  });

  return mongoose.model('User', UserSchema, 'user');
};
