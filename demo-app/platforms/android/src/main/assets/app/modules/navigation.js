var frameModule = require("ui/frame");

function gotoPage(page) {
  var topmost = frameModule.topmost();
  topmost.navigate({
    moduleName: page,
    backstackVisible: false
  });;
}

// topmost.currentPage.showModal

exports.showEnterNames = function() {
  gotoPage('pages/add-names/add-names');
}

exports.showReadNames = function() {
  gotoPage('pages/read-names/read-names');
}

exports.showRevealNames = function() {
  gotoPage('pages/reveal-names/reveal-names');
}

exports.showNetworkError = function() {
  var topmost = frameModule.topmost();
  var modalPageModule = "pages/network-error/network-error";
  var context = "some custom context";
  var fullscreen = true;
  topmost.currentPage.showModal(modalPageModule, context, function() {
     // closeCallback
  }, fullscreen);
}
