var Observable = require("data/observable").Observable;

var navigator = require("./modules/navigation.js");


function createViewModel() {
  var viewModel = new Observable();
  
  viewModel.getStarted = function() {
    navigator.gotoPage('add-names');
  };

  return viewModel;
}

exports.createViewModel = createViewModel;
