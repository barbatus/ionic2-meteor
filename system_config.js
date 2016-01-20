System.config({
  packages: {
    'ionic2-meteor': {
      main: 'bootstrap',
      format: 'register',
      map: {
        '.': System.normalizeSync('{barbatus:ionic2-meteor}')
      }
    }
  }
});
