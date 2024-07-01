const mongoose = require('mongoose');

const sessionSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  workTime: {
    type: Number,
    required: true,
  },
  shortBreak: {
    type: Number,
    required: true,
  },
  longBreak: {
    type: Number,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Session = mongoose.model('Session', sessionSchema);

module.exports = Session;
