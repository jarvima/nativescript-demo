var Observable = require("data/observable").Observable;

var navigator = require("../../modules/navigation.js");

var closeCallback;

function createViewModel() {
  var viewModel = new Observable();
  
  viewModel.initClose = function(closer) {
    closeCallback = closer;
  }
  
  viewModel.goBack = function() {
    console.log('calling go back...');
    closeCallback();
  };

  return viewModel;
}

exports.createViewModel = createViewModel;