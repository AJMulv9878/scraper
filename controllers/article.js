var db = require('../models');

module.exports = {
    findAll: function(request, response) {
        db.Article
            .find(request.query)
            .sort({ date: -1})
            .then(function(result) {
                response.json(result);
            });
    },

    delete: function(request, response) {
        db.Article.remove({ _id: request.params.id })
        .then(function(result) {
            response.json(result);
        });
    },

    update: function(request, response) {
        console.log(request.body);
        db.Article.findOneAndUpdate({ _id: request.params.id}, {$set: request.body})
        .then(function(result) {
            response.json(result);
        });
    }
};