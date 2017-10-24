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
  
  viewModel.createGroup = function(args) {
    deviceData.post('/create-group')
    .then(function(response) {
      console.log('create group response:', response);
    });
    
    this.set('addView',  hide);
    this.set('optionView', show);
    viewModel.set('nvmView', hide);
  };
  
  viewModel.joinGroup = function() {
    viewModel.set('addView',  show);
    viewModel.set('optionView', hide);
    viewModel.set('nvmView', show);
  };
  
  viewModel.finish = function() {
    navigator.gotoPage('read-names');
  };

  return viewModel;
}

exports.createViewModel = createViewModel;
