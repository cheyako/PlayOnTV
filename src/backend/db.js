var mongoose = require('mongoose'),
    config = require('config');

module.exports = function(app) {
  mongoose.connect(config.mongo.connection);
}