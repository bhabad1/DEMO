var express = require('express');
var router = express.Router();
var BookInstanceController = require('../controllers/BookInstanceController.js');

/*
 * GET
 */
router.get('/', BookInstanceController.list);

/*
 * GET
 */
router.get('/:id', BookInstanceController.show);

/*
 * POST
 */
router.post('/', BookInstanceController.create);

/*
 * PUT
 */
router.put('/:id', BookInstanceController.update);

/*
 * DELETE
 */
router.delete('/:id', BookInstanceController.remove);

module.exports = router;
