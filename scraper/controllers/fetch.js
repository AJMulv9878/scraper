var scrape = require('../scripts/scrape');
var db = require('../models');

module.exports = {
    articleScrape: function(result) {
        scrape(function(data) {
            var article = data;

            for (i = 0; i < article.length; i++) {
                article[i].saved = false;
            }

            Article.collection.insertMany(articles, {ordered: false}, function(error, res) {
                result(error, res);
            });
        });
    }
};