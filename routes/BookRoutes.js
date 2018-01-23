var express = require('express');
var router = express.Router();
var BookController = require('../controllers/BookController.js');

/*
 * GET
 */
router.get('/', BookController.list);

/*
 * GET
 */
router.get('/:id', BookController.show);

/*
 * POST
 */
router.post('/', BookController.create);

/*
 * PUT
 */
router.put('/:id', BookController.update);

/*
 * DELETE
 */
router.delete('/:id', BookController.remove);

module.exports = router;
