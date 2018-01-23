var express = require('express');
var router = express.Router();
var GenreController = require('../controllers/GenreController.js');

/*
 * GET
 */
router.get('/', GenreController.list);

/*
 * GET
 */
router.get('/:id', GenreController.show);

/*
 * POST
 */
router.post('/', GenreController.create);

/*
 * PUT
 */
router.put('/:id', GenreController.update);

/*
 * DELETE
 */
router.delete('/:id', GenreController.remove);

module.exports = router;
