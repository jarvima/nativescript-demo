var createViewModel = require("./join-group-model").createViewModel;

function onNavigatingTo(args) {
  var page = args.object;

  page.bindingContext = createViewModel();
}

exports.onNavigatingTo = onNavigatingTo;
