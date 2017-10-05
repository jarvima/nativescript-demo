var Observable = require("data/observable").Observable;

var navigator = require("../../modules/navigation.js");


function createViewModel() {
  var viewModel = new Observable();
  
  viewModel.finish = function() {
    navigator.gotoPage('read-names');
  };

  return viewModel;
}

exports.createViewModel = createViewModel;