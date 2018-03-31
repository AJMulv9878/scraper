var db = require('../models');

module.exports = {
    findOne: function(request, response) {
        db.Note
            .findOne(request.query)
            .then(function(result) {
                response.json(result);
        });
    },

    create: function(request, response) {
        db.Note
            .create(request.body)
            .then(function(result) {
                response.json(result);
        });
    },

    delete: function(request, response) {
        db.Note
            .remove({ _id: request.params.id })
            .then(function(result) {
                response.json(result);
        });
    }
};