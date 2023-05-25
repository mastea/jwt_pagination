const { Router } = require('express');
const addnewController = require('../controllers/addnewController');
const { verifyAuth } = require('../middleware/authMiddleware');

const router = Router();

router.get('/addnew', verifyAuth, addnewController.addnew_get);
router.post('/addnew', verifyAuth, addnewController.addnew_post);

module.exports = router;