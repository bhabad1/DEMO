var express = require('express');
var router = express.Router();
var AuthorController = require('../controllers/AuthorController.js');

/*
 * GET
 */
router.get('/', AuthorController.list);

/*
 * GET
 */
router.get('/:id', AuthorController.show);

/*
 * POST
 */
router.post('/', AuthorController.create);

/*
 * PUT
 */
router.put('/:id', AuthorController.update);

/*
 * DELETE
 */
router.delete('/:id', AuthorController.remove);

module.exports = router;
