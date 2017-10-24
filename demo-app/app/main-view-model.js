var Observable = require("data/observable").Observable;
var deviceData = require("./modules/device-data.js");
var navigator = require("./modules/navigation.js");

function createViewModel() {
  var viewModel = new Observable();
  viewModel.counter = 42;

  deviceData.setGroup_id('59ca7dfb76ff3d001245cef8');
  deviceData.setGroupName('nit62');
  deviceData.setDeviceId(8864461303326801);

  viewModel.getStarted = function() {
    navigator.gotoPage('join-group');
  };

  return viewModel;
}

exports.createViewModel = createViewModel;
