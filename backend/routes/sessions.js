const express = require('express');
const { saveSession, getSessions } = require('../controllers/sessionController');
const router = express.Router();
const auth = require('../middleware/auth');

router.post('/save', auth, saveSession);
router.get('/', auth, getSessions);

module.exports = router;
