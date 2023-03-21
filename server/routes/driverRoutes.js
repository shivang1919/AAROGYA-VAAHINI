const express = require('express');
const { registerDriver, loginDriver, getAllAvailableDriver } = require('../controllers/driverController');
const router = express.Router();

router.post('/register',registerDriver)
router.post('/login',loginDriver)
router.get("/getavailabledrivers",getAllAvailableDriver)
module.exports = router