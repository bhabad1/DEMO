var BookInstanceModel = require('../models/BookInstanceModel.js');

/**
 * BookInstanceController.js
 *
 * @description :: Server-side logic for managing BookInstances.
 */
module.exports = {

    /**
     * BookInstanceController.list()
     */
    list: function (req, res) {
        BookInstanceModel.find(function (err, BookInstances) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting BookInstance.',
                    error: err
                });
            }
            return res.json(BookInstances);
        });
    },

    /**
     * BookInstanceController.show()
     */
    show: function (req, res) {
        var id = req.params.id;
        BookInstanceModel.findOne({_id: id}, function (err, BookInstance) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting BookInstance.',
                    error: err
                });
            }
            if (!BookInstance) {
                return res.status(404).json({
                    message: 'No such BookInstance'
                });
            }
            return res.json(BookInstance);
        });
    },

    /**
     * BookInstanceController.create()
     */
    create: function (req, res) {
        var BookInstance = new BookInstanceModel({
			book : req.body.book,
			imprint : req.body.imprint,
			status : req.body.status,
			dueBack : req.body.dueBack

        });

        BookInstance.save(function (err, BookInstance) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating BookInstance',
                    error: err
                });
            }
            return res.status(201).json(BookInstance);
        });
    },

    /**
     * BookInstanceController.update()
     */
    update: function (req, res) {
        var id = req.params.id;
        BookInstanceModel.findOne({_id: id}, function (err, BookInstance) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting BookInstance',
                    error: err
                });
            }
            if (!BookInstance) {
                return res.status(404).json({
                    message: 'No such BookInstance'
                });
            }

            BookInstance.book = req.body.book ? req.body.book : BookInstance.book;
			BookInstance.imprint = req.body.imprint ? req.body.imprint : BookInstance.imprint;
			BookInstance.status = req.body.status ? req.body.status : BookInstance.status;
			BookInstance.dueBack = req.body.dueBack ? req.body.dueBack : BookInstance.dueBack;
			
            BookInstance.save(function (err, BookInstance) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating BookInstance.',
                        error: err
                    });
                }

                return res.json(BookInstance);
            });
        });
    },

    /**
     * BookInstanceController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;
        BookInstanceModel.findByIdAndRemove(id, function (err, BookInstance) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the BookInstance.',
                    error: err
                });
            }
            return res.status(204).json();
        });
    }
};
