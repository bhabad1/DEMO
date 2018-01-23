var GenreModel = require('../models/GenreModel.js');

/**
 * GenreController.js
 *
 * @description :: Server-side logic for managing Genres.
 */
module.exports = {

    /**
     * GenreController.list()
     */
    list: function (req, res) {
        GenreModel.find(function (err, Genres) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting Genre.',
                    error: err
                });
            }
            return res.json(Genres);
        });
    },

    /**
     * GenreController.show()
     */
    show: function (req, res) {
        var id = req.params.id;
        GenreModel.findOne({_id: id}, function (err, Genre) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting Genre.',
                    error: err
                });
            }
            if (!Genre) {
                return res.status(404).json({
                    message: 'No such Genre'
                });
            }
            return res.json(Genre);
        });
    },

    /**
     * GenreController.create()
     */
    create: function (req, res) {
        var Genre = new GenreModel({
			name : req.body.name

        });

        Genre.save(function (err, Genre) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating Genre',
                    error: err
                });
            }
            return res.status(201).json(Genre);
        });
    },

    /**
     * GenreController.update()
     */
    update: function (req, res) {
        var id = req.params.id;
        GenreModel.findOne({_id: id}, function (err, Genre) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting Genre',
                    error: err
                });
            }
            if (!Genre) {
                return res.status(404).json({
                    message: 'No such Genre'
                });
            }

            Genre.name = req.body.name ? req.body.name : Genre.name;
			
            Genre.save(function (err, Genre) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating Genre.',
                        error: err
                    });
                }

                return res.json(Genre);
            });
        });
    },

    /**
     * GenreController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;
        GenreModel.findByIdAndRemove(id, function (err, Genre) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the Genre.',
                    error: err
                });
            }
            return res.status(204).json();
        });
    }
};
