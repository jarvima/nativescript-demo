var createViewModel = require("./game-intro-model").createViewModel;

function onNavigatingTo(args) {
  var page = args.object;

  page.bindingContext = createViewModel();
}

exports.onNavigatingTo = onNavigatingTo;
