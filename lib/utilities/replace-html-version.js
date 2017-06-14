var cheerio   = require('cheerio');
var RSVP      = require('rsvp');

module.exports = function(html, version) {
  var $ = cheerio.load(html.toString());
  $('html').attr('data-app-version', version);

  return new RSVP.Promise(function(resolve) {
    resolve($.html(), version);
  });
};
