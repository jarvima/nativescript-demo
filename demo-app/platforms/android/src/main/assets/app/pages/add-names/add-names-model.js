var Observable = require("data/observable").Observable;
var view = require("ui/core/view");
var buttonModule = require("tns-core-modules/ui/button");

var navigator = require("../../modules/navigation.js");
var deviceData = require("../../modules/device-data.js");


var count = 0;

var show = 'visible';
var hide = 'collapsed';

function scrubName(name) {
  if (!name) {
    return '';
  }
  return name.trim();
}

function createViewModel() {
  var viewModel = new Observable();
  
  viewModel.addView = show;
  viewModel.nameError = hide;
  viewModel.optionView = hide;
  viewModel.nvmView = hide;
  
  viewModel.init = function(page) {
    var secretNameInpt = page.getViewById('secretNameInpt');
    secretNameInpt.addEventListener('propertyChange', viewModel.checkNameChange);
  };
  
  viewModel.checkNameChange = function(args) {
    console.log('property change args:', args);
  };

  viewModel.submitName = function(args) {
    var name = scrubName(this.secretName);
    if (!name) {
      this.set('nameError', show);
      return;
    }
    
    this.set('nameError', hide);

    console.log('The name is good', name, deviceData);
    deviceData.post('/add-name', { secretName: name });
    
    this.set('addView',  hide);
    this.set('optionView', show);
    viewModel.set('nvmView', hide);
  };
  
  viewModel.addAnother = function() {
    viewModel.set('addView',  show);
    viewModel.set('optionView', hide);
    viewModel.set('nvmView', show);
  };
  
  viewModel.finish = function() {
    navigator.showReadNames();
  };

  return viewModel;
}

exports.createViewModel = createViewModel;