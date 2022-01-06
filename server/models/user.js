const mongoose = require('mongoose')
mongoose.set('useCreateIndex', true);

var userSchema = new mongoose.Schema(
  
    {
        id: String,
        name: String,
        email: {
          unique: true,
          type: String
        },
        password: String,
        type: String,
        balance: String,
        bet_history :[ {
          betID: String
        }],
        balance_history: [{
          date: String,
          value: String
        }]
  });

module.exports = mongoose.model('user', userSchema)