var AuthorModel = require('../models/AuthorModel.js');

/**
 * AuthorController.js
 *
 * @description :: Server-side logic for managing Authors.
 */
module.exports = {

    /**
     * AuthorController.list()
     */
    list: function (req, res) {
        AuthorModel.find(function (err, Authors) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting Author.',
                    error: err
                });
            }
            return res.json(Authors);
        });
    },

    /**
     * AuthorController.show()
     */
    show: function (req, res) {
        var id = req.params.id;
        AuthorModel.findOne({_id: id}, function (err, Author) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting Author.',
                    error: err
                });
            }
            if (!Author) {
                return res.status(404).json({
                    message: 'No such Author'
                });
            }
            return res.json(Author);
        });
    },

    /**
     * AuthorController.create()
     */
    create: function (req, res) {
        var Author = new AuthorModel({
			firstName : req.body.firstName,
			familyName : req.body.familyName,
			dateOfBirth : req.body.dateOfBirth,
			dateOfDeath : req.body.dateOfDeath

        });

        Author.save(function (err, Author) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating Author',
                    error: err
                });
            }
            return res.status(201).json(Author);
        });
    },

    /**
     * AuthorController.update()
     */
    update: function (req, res) {
        var id = req.params.id;
        AuthorModel.findOne({_id: id}, function (err, Author) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting Author',
                    error: err
                });
            }
            if (!Author) {
                return res.status(404).json({
                    message: 'No such Author'
                });
            }

            Author.firstName = req.body.firstName ? req.body.firstName : Author.firstName;
			Author.familyName = req.body.familyName ? req.body.familyName : Author.familyName;
			Author.dateOfBirth = req.body.dateOfBirth ? req.body.dateOfBirth : Author.dateOfBirth;
			Author.dateOfDeath = req.body.dateOfDeath ? req.body.dateOfDeath : Author.dateOfDeath;
			
            Author.save(function (err, Author) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating Author.',
                        error: err
                    });
                }

                return res.json(Author);
            });
        });
    },

    /**
     * AuthorController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;
        AuthorModel.findByIdAndRemove(id, function (err, Author) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the Author.',
                    error: err
                });
            }
            return res.status(204).json();
        });
    }
};
