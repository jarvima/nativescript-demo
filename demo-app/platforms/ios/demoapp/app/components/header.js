var navigator = require("../modules/navigation.js");

exports.nav = navigator;

exports.showEnterNames = function() {
  navigator.gotoPage('add-names');
}

exports.showReadNames = function() {
  navigator.gotoPage('read-names');
}

exports.showGuessNames = function() {
  navigator.gotoPage('guess-names');
  navigator.showNetworkError();
}