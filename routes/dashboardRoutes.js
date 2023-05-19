const { Router } = require('express');
const dashboardController = require('../controllers/dashboardController');
const { verifyAuth } = require('../middleware/authMiddleware');
const router = Router();

router.get('/dashboard', verifyAuth, dashboardController.dashboard_get);
router.get('/addnew', verifyAuth, dashboardController.addnew_get);
router.post('/addnew', verifyAuth, dashboardController.addnew_post);

module.exports = router;