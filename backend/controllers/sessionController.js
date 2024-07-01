const Session = require('../models/Session');

const saveSession = async (req, res) => {
  const { userId } = req;
  const { workTime, shortBreak, longBreak } = req.body;

  try {
    const session = new Session({
      user: userId,
      workTime,
      shortBreak,
      longBreak,
    });

    const savedSession = await session.save();

    res.status(201).json(savedSession);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getSessions = async (req, res) => {
  const { userId } = req;

  try {
    const sessions = await Session.find({ user: userId });

    res.status(200).json(sessions);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { saveSession, getSessions };
