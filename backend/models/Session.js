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
  startTime: {
    type: Date,
    required: true,
  },
  endTime: {
    type: Date,
    required: true,
  },
  pauses: [
    {
      start: { type: Date, required: true },
      end: { type: Date, required: true }
    }
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Session = mongoose.model('Session', sessionSchema);

module.exports = Session;
