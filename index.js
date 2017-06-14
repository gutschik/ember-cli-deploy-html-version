/* jshint node: true */
'use strict';

var path      = require('path');
var fs        = require('fs');
var RSVP      = require('rsvp');
var Promise   = RSVP.Promise;
var denodeify = RSVP.denodeify;

var readFile  = denodeify(fs.readFile);
var writeFile = denodeify(fs.writeFile);

var replaceHtmlVersion = require('./lib/utilities/replace-html-version');
var DeployPluginBase = require('ember-cli-deploy-plugin');


module.exports = {
  name: 'ember-cli-deploy-html-version',

  createDeployPlugin: function(options) {
    var DeployPlugin = DeployPluginBase.extend({
      name: options.name,

      defaultConfig: {
        distDir: function(context) {
          return context.distDir;
        },

        distFiles: function(context) {
          return context.distFiles || [];
        }
      },

      willUpload: function(context) {
        var version  = context.revisionData && context.revisionData.revisionKey;

        var distDir      = this.readConfig('distDir');
        var htmlPagePath = path.join(distDir, 'index.html');

        this.log('Adding version attribute to html tag with value of "' + version + '".');

        return readFile(htmlPagePath)
          .then(function(data) {
            return replaceHtmlVersion(data, version);
          })
          .then(function(html) {
            return writeFile(htmlPagePath, html);
          })
          .then(function() {
            this.log('Successfully added version attribute to html tag.', { color: 'green' });
          }.bind(this),
          function() {
            this.log('Faild to add version attribute to html tag.', { color: 'red' });
            return Promise.reject;
          }.bind(this));
      },

     
    });

    return new DeployPlugin();
  }
};
