var dts = require("dts-bundle");

var result = dts.bundle({
  name: 'ionic/ionic',
  main: 'node_modules/ionic-framework/ionic.d.ts',
  out: '../../typings/ionic-framework/ionic.d.ts',
  referenceExternals: true
});

if (!result.emitted) {
  console.log('Result no emitted - use verbose to see details.');
  process.exit(1);
}
