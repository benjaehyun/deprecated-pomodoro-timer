const mongoose = require('mongoose');

const settingsSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  workTime: {
    type: Number,
    default: 25, // Default work time in minutes
  },
  label: {
    type: String,
    default: 'Custom',
  },
  shortBreak: {
    type: Number,
    default: 5, // Default short break time in minutes
  },
  longBreak: {
    type: Number,
    default: 15, // Default long break time in minutes
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Settings = mongoose.model('Settings', settingsSchema);

module.exports = Settings;
