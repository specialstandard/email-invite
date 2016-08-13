var webpack = require("webpack")
//  path = require("path");

module.exports = function(config) {
  config.set({

    //basePath: './',

    files: [
      'node_modules/jquery/dist/jquery.js',
      'node_modules/jasmine-jquery/lib/jasmine-jquery.js',
      'node_modules/angular/angular.js',
      //'node_modules/angular-route/angular-route.js',
      'node_modules/angular-mocks/angular-mocks.js',
      //'build/bundle.js',

      'src/app/app.js',
      //'src/app/invite-component/invite-directive/invite-directive.js',
      'src/app/**/*.js',
      //'src/app/invite-component/invite.js',


      //'src/app/invite-component/invite-directive/invite-directive.spec.js'
    ],

    autoWatch: true,

    frameworks: ['jasmine'],

    browsers: ['Chrome'],

    plugins: [
      'karma-webpack',
      'karma-chrome-launcher',
      'karma-firefox-launcher',
      'karma-jasmine'
    ],
    preprocessors: {
      //'../src/app/invite-component/invite-directive/invite-directive.spec.js': ['webpack'],
      '../src/**/*.js': ['webpack']
    },
    webpack:{

      module: {
        loaders: [
          { test: /\.js/, exclude: /node_modules/, loader: 'babel-loader' }
        ]
      },
      resolve: {
        alias: [
          { _karma_webpack_: './' },
        ]
      },
      watch: true
    },
    webpackServer: {
      noInfo: true
    }

  });
};
