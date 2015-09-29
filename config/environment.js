/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'mickaelgoubin',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  //csp
  ENV.contentSecurityPolicy = {
    'default-src': "http://www.youtube.com https://www.youtube.com",
    'script-src': "'self' 'unsafe-eval' 127.0.0.1", // Allow scripts from https://cdn.mxpnl.com
    'font-src': "'self' https://fonts.gstatic.com http://fonts.gstatic.com" , // Allow fonts to be loaded from http://fonts.gstatic.com
    'connect-src': "'self'", // Allow data (ajax/websocket) from api.mixpanel.com and custom-api.local
    'img-src': "'self' http://mickael-goubin.fr/ ",
    'style-src': "'self' 'unsafe-inline' http://fonts.googleapis.com https://fonts.googleapis.com ", // Allow inline styles and loaded CSS from http://fonts.googleapis.com 
    'media-src': "'self'"
  }

  // ENV.contentSecurityPolicy = {
  //   'default-src': "*",
  //   'script-src': "* 'unsafe-eval'", // Allow scripts from https://cdn.mxpnl.com
  //   'font-src': "*" , // Allow fonts to be loaded from http://fonts.gstatic.com
  //   'connect-src': "*", // Allow data (ajax/websocket) from api.mixpanel.com and custom-api.local
  //   'img-src': "*",
  //   'style-src': "* 'unsafe-inline' 'unsafe-eval' ", // Allow inline styles and loaded CSS from http://fonts.googleapis.com 
  //   'media-src': "*"
  // }

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
