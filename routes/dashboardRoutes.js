const { Router } = require('express');
const dashboardController = require('../controllers/dashboardController');
const { verifyAuth } = require('../middleware/authMiddleware');

const router = Router();

router.get('/dashboard', verifyAuth, dashboardController.dashboard_get);

module.exports = router;