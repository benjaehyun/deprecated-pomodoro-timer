const Session = require('../models/Session');

const saveSession = async (req, res) => {
  const { workTime, shortBreak, longBreak, startTime, endTime, pauses } = req.body;
  const session = new Session({
    userId: req.userId,
    workTime,
    shortBreak,
    longBreak,
    startTime,
    endTime,
    pauses
  });
  try {
    const savedSession = await session.save();
    res.status(201).json(savedSession);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getSessions = async (req, res) => {
  try {
    const sessions = await Session.find({ userId: req.userId });
    res.status(200).json(sessions);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { saveSession, getSessions };
