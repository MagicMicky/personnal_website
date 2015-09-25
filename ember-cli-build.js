/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    // Add options here
  });
  app.import('vendor/js/modernizr-latest.js');
  app.import('vendor/js/jquery-1.8.2.min.js');
  app.import('vendor/js/jquery.isotope.min.js');
  app.import('vendor/js/jquery.nav.js');
  app.import('vendor/js/jquery.cslider.js');
  app.import('vendor/fancybox/jquery.fancybox.pack.js');
  app.import('vendor/fancybox/jquery.fancybox.css');
  // app.import('vendor/owl-carousel/owl.carousel.js');
  // app.import('vendor/owl-carousel/owl.carousel.css');
  // app.import('vendor/owl-carousel/owl.theme.css');
  app.import('vendor/js/custom.js');
  app.import('vendor/css/da-slider.css');
  app.import('vendor/css/bootstrap.min.css');
  app.import('vendor/css/styles.css');
  app.import('vendor/css/isotope.css');
  app.import('vendor/css/font.css');

  // Use `app.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.

  return app.toTree();
};
