const { Router } = require('express');
const dashboardController = require('../controllers/dashboardController');
const { verifyAuth } = require('../middleware/authMiddleware');

const router = Router();

router.get('/dashboard', verifyAuth, dashboardController.dashboard_get);
router.delete('/dashboard/delete/:_id', verifyAuth, dashboardController.dashboard_delete);
router.get('/dashboard/edit/:_id', verifyAuth, dashboardController.edit_get);
router.put('/dashboard/edit/:_id', verifyAuth, dashboardController.edit_put);

module.exports = router;