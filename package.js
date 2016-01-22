Package.describe({
  name: 'barbatus:ionic2-meteor',
  version: '0.1.0',
  summary: 'Ionic2 Npm packaged for Meteor',
  git: 'https://github.com/barbatus/ionic2-meteor',
  documentation: null
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.0.1');

  api.use([
    'urigo:angular2-meteor@0.3.8'
  ]);

  api.imply([
    'urigo:angular2-meteor'
  ]);

  api.addFiles([
    'system_config.js'
  ]);

  api.addFiles([
    'bootstrap.ts'
  ], 'client');

  api.addAssets([
    'node_modules/ionic-framework/fonts/ionicons.ttf',
    'node_modules/ionic-framework/fonts/ionicons.woff',
    'node_modules/ionic-framework/fonts/roboto-regular.ttf',
    'node_modules/ionic-framework/fonts/roboto-regular.woff'
  ], 'client');

  api.addFiles([
    'node_modules/ionic-framework/bundles/ionic.css',
    'node_modules/ionic-framework/bundles/ionic.ios.css',
    'node_modules/ionic-framework/bundles/ionic.md.css',
    'node_modules/ionic-framework/bundles/ionic.system.js'
  ], 'client');

  api.addFiles([
    'typings/ionic-framework/ionic.d.ts',
    'typings/ionic2-meteor/ionic2-meteor.d.ts'
  ], 'server');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('barbatus:ionic2-meteor');
});
