var createViewModel = require("./network-error-model").createViewModel;
var appState = require('../../modules/app-state');

var page;

function onLoaded(args) {
  page = args.object;
  
  console.log('modal: onLoaded', args);
  page.bindingContext = createViewModel();
}

function onShownModally (args) {
  //args.context;
  //args.closeCallback;
  console.log('modal: onShownModally', args);
  page.bindingContext.initClose(args.closeCallback);
  appState.setModalCloseCallback(args.closeCallback);
}

exports.onLoaded = onLoaded;
exports.onShownModally = onShownModally;
