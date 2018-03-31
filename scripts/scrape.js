var cheerio = require('cheerio');
var request = require('request');
var db = require('.././models');

var scrape = function (result) {
    request("https://www.rockpapershotgun.com/", function(error, response, html) {
        var $ = cheerio.load(html);

        $("div.post-inner").each(function(i, element) {
            var link = $(element).children("h1").children("a").attr("href");
            var title = $(element).children("h1").text();
            var summary = $(element).children("div.entry").children("p").text();

            db.Article.insertMany({"title":title, "link":link, "summary":summary});
        });
    });
}

module.exports = scrape;