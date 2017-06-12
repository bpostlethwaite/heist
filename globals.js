var chromedriver = require('chromedriver');
module.exports = {

  heistConfig: require('./config')(),

  before: function(done) {

    chromedriver.start();

    done();
  },

  after: function(done) {
    chromedriver.stop();

    done();
  }
};
