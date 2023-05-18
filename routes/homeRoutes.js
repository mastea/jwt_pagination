const { Router } = require('express');
const homeController = require('../controllers/homeController.js');

const router = Router();

router.get('/', homeController.home_get);

module.exports = router;