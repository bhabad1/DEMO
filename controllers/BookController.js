var BookModel = require('../models/BookModel.js');

/**
 * BookController.js
 *
 * @description :: Server-side logic for managing Books.
 */
module.exports = {

    /**
     * BookController.list()
     */
    list: function (req, res) {
        BookModel.find(function (err, Books) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting Book.',
                    error: err
                });
            }
            return res.json(Books);
        });
    },

    /**
     * BookController.show()
     */
    show: function (req, res) {
        var id = req.params.id;
        BookModel.findOne({_id: id}, function (err, Book) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting Book.',
                    error: err
                });
            }
            if (!Book) {
                return res.status(404).json({
                    message: 'No such Book'
                });
            }
            return res.json(Book);
        });
    },

    /**
     * BookController.create()
     */
    create: function (req, res) {
        var Book = new BookModel({
			title : req.body.title,
			author : req.body.author,
			summary : req.body.summary,
			isbn : req.body.isbn,
			genre : req.body.genre

        });

        Book.save(function (err, Book) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating Book',
                    error: err
                });
            }
            return res.status(201).json(Book);
        });
    },

    /**
     * BookController.update()
     */
    update: function (req, res) {
        var id = req.params.id;
        BookModel.findOne({_id: id}, function (err, Book) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting Book',
                    error: err
                });
            }
            if (!Book) {
                return res.status(404).json({
                    message: 'No such Book'
                });
            }

            Book.title = req.body.title ? req.body.title : Book.title;
			Book.author = req.body.author ? req.body.author : Book.author;
			Book.summary = req.body.summary ? req.body.summary : Book.summary;
			Book.isbn = req.body.isbn ? req.body.isbn : Book.isbn;
			Book.genre = req.body.genre ? req.body.genre : Book.genre;
			
            Book.save(function (err, Book) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating Book.',
                        error: err
                    });
                }

                return res.json(Book);
            });
        });
    },

    /**
     * BookController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;
        BookModel.findByIdAndRemove(id, function (err, Book) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the Book.',
                    error: err
                });
            }
            return res.status(204).json();
        });
    }
};
