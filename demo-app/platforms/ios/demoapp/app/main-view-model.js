var Observable = require("data/observable").Observable;
var deviceData = require("./modules/device-data.js");

function getMessage(counter) {
  if (counter <= 0) {
    return "Hoorraaay! You unlocked the NativeScript clicker achievement!";
  } else {
    return counter + " taps left";
  }
}

function createViewModel() {
  var viewModel = new Observable();
  viewModel.counter = 42;
  viewModel.message = getMessage(viewModel.counter);

  deviceData.setGroup_id('59ca7dfb76ff3d001245cef8');
  deviceData.setGroupName('nit62');
  deviceData.setDeviceId(8864461303326801);


  viewModel.onTap = function() {
    this.counter--;
    this.set("message", getMessage(this.counter));
  }

  return viewModel;
}

exports.createViewModel = createViewModel;