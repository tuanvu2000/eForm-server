const router = require('express').Router();
const jsonFormController = require('../controllers/jsonFormController');

router.get('/', jsonFormController.getAll);

router.post('/', jsonFormController.postJson);

router.get('/:id', jsonFormController.getOne);

router.put('/:id', jsonFormController.putJsonForm);

module.exports = router;
