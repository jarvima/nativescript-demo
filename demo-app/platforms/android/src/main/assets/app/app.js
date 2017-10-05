/*
In NativeScript, the app.js file is the entry point to your application.
You can use this file to perform app-level initialization, but the primary
purpose of the file is to pass control to the app’s first module.
*/

require("./bundle-config");

var appState = require('./modules/app-state');
var application = require("application");

application.on(application.suspendEvent, function (args) {
  console.log('app suspending....');
  appState.closeModal();
});

application.on(application.exitEvent, function (args) {
  console.log('app exiting....');
  appState.closeModal();
});

application.start({ moduleName: "main-page", backstackVisible: false });

/*
Do not place any code after the application has been started as it will not
be executed on iOS.
*/
