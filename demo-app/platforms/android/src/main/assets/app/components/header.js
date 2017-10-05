var navigator = require("../modules/navigation.js");

exports.nav = navigator;

exports.showEnterNames = function() {
  navigator.showEnterNames();
}

exports.showReadNames = function() {
  navigator.showReadNames();
}

exports.showRevealNames = function() {
  navigator.showRevealNames();
  navigator.showNetworkError();
}