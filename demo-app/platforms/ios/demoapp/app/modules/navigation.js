var frameModule = require("ui/frame");

function gotoPage(page) {
  var topmost = frameModule.topmost();
  topmost.navigate({
    moduleName: 'pages/' + page + '/' + page,
    backstackVisible: false
  });;
}

// topmost.currentPage.showModal

exports.gotoPage = gotoPage;

exports.showNetworkError = function() {
  var topmost = frameModule.topmost();
  var modalPageModule = "pages/network-error/network-error";
  var context = "some custom context";
  var fullscreen = true;
  topmost.currentPage.showModal(modalPageModule, context, function() {
     // closeCallback
  }, fullscreen);
}
