const Settings = require('../models/Settings');

const getSettings = async (req, res) => {
  const { userId } = req;

  try {
    const settings = await Settings.find({ user: userId });

    if (!settings.length) {
      return res.status(404).json({ message: 'Settings not found' });
    }

    res.status(200).json(settings);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateSettings = async (req, res) => {
  const { userId } = req;
  const { workTime, shortBreak, longBreak, label } = req.body;

  try {
    const settings = await Settings.findOneAndUpdate(
      { user: userId },
      { workTime, shortBreak, longBreak, label },
      { new: true, upsert: true }
    );

    res.status(200).json(settings);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const saveSettings = async (req, res) => {
  const { label, longBreak, shortBreak, workTime, } = req.body;
  const settings = new Settings({
    user: req.userId,
    label,
    longBreak,
    shortBreak, 
    workTime
  });
  try {
    const savedSettings = await settings.save();
    res.status(201).json(savedSettings);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getSettings, updateSettings, saveSettings };
