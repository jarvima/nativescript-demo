var createViewModel = require("./add-names-model").createViewModel;

function onNavigatingTo(args) {
  var page = args.object;

  page.bindingContext = createViewModel();
  page.bindingContext.init(page);
}

exports.onNavigatingTo = onNavigatingTo;
