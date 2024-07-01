const Settings = require('../models/Settings');

const getSettings = async (req, res) => {
  const { userId } = req;

  try {
    const settings = await Settings.findOne({ user: userId });

    if (!settings) {
      return res.status(404).json({ message: 'Settings not found' });
    }

    res.status(200).json(settings);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateSettings = async (req, res) => {
  const { userId } = req;
  const { workTime, shortBreak, longBreak } = req.body;

  try {
    const settings = await Settings.findOneAndUpdate(
      { user: userId },
      { workTime, shortBreak, longBreak },
      { new: true, upsert: true }
    );

    res.status(200).json(settings);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getSettings, updateSettings };
