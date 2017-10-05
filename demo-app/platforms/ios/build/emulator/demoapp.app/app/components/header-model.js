var Observable = require("data/observable").Observable;

function getMessage(counter) {
    if (counter <= 0) {
        return "Hoorraaay! You unlocked the NativeScript clicker achievement!";
    } else {
        return counter + " taps left";
    }
}

function createViewModel() {
    var viewModel = new Observable();
    viewModel.names = {};

    viewModel.showEnterNames = function() {
      console.log('enter names clicked....');
    }

    viewModel.showReadNames = function() {
      console.log('read names clicked....');
    }

    viewModel.showRevealNames = function() {
      console.log('reveal names clicked....');
    }

    return viewModel;
}

exports.createViewModel = createViewModel;