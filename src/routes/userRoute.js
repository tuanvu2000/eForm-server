const router = require('express').Router();
const userController = require('../controllers/userController');

router.get('/', userController.getAll);

router.post('/', userController.postUser);

module.exports = router;
