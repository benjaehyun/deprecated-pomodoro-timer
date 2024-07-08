const express = require('express');
const { getSettings, updateSettings, saveSettings } = require('../controllers/settingsController');
const router = express.Router();
const auth = require('../middleware/auth');


router.get('/', auth, getSettings);
router.post('/', auth, updateSettings);
router.post('/save', auth, saveSettings);

module.exports = router;
