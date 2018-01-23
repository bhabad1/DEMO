var express = require("express");
var Router = express.Router();

var bookController = require('../controllers/BookController');
var authorController = require('../controllers/AuthorController');
var genreController = require('../controllers/GenreController');
var bookInstanceController = require('../controllers/BookInstanceController');


router.get('/', bookController.index);

router.get('/book/create', bookController.list);

router.post('/book/create', bookController.create);

router.get('/book/:id/delete', bookController.bookDeleteGet);

router.post('/book/:id/delete', bookController.bookDeletePost);

router.get('/book/:id/update', bookController.bookUpdateGet);

router.post('/book/:id/update', bookController.bookUpdatePost);

router.get('/book/:id', bookController.show);

router.get('/books', bookController.list);


router.get('/author/create', authorController.authorCreateGet);

router.post('/author/create', authorController.authorCreatePost);

router.get('/author/:id/delete', authorController.authorDeleteGet);

router.post('/author/:id/delete', authorController.authorDeletePost);

router.get('/author/:id/update', authorController.authorUpdateGet);

router.post('/author/:id/update', authorController.authorUpdatePost);

router.get('/author/:id', authorController.authorDetail);

router.get('/authors', authorController.authorList);


router.get('/genre/create', genreController.genreCreateGet);

router.post('/genre/create', genreController.genreCreatePost);

router.get('/genre/:id/delete', genreController.genreDeleteGet);

router.post('/genre/:id/delete', genreController.genreDeletePost);

router.get('/genre/:id/update', genreController.genreUpdateGet);

router.post('/genre/:id/update', genreController.genreUpdatePost);

router.get('/genre/:id', genreController.genreDetail);

router.get('/genres', genreController.genreList);


router.get('/bookinstance/create', bookInstanceController.bookInstanceCreateGet);

router.post('/bookinstance/create', bookInstanceController.bookInstanceCreatePost);

router.get('/bookinstance/:id/delete', bookInstanceController.bookInstanceDeleteGet);

router.post('/bookinstance/:id/delete', bookInstanceController.bookInstanceDeletePost);

router.get('/bookinstance/:id/update', bookInstanceController.bookInstanceUpdateGet);

router.post('/bookinstance/:id/update', bookInstanceController.bookInstanceUpdatePost);

router.get('/bookinstance/:id', bookInstanceController.show);

router.get('/bookinstances', bookInstanceController.list);

module.exports = router;