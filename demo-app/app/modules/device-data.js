var xhr = require("./xhr.js");
var navigator = require("../modules/navigation.js");

var groupName = null;
var group_id = null;
var deviceId = null;

function setGroupName(name) {
  groupName = name;
}

function setGroup_id(_id) {
  group_id = _id;
}

function setDeviceId(id) {
  deviceId = id;
}

function post(url, data) {
  data = data || {};
  data.groupName  = groupName;
  data.group_id = group_id;
  data.deviceId = deviceId;
  
  // TODO handle any errors here
  return xhr.post('http://localhost:8080' + url, data)
  //return xhr.post('https://ghostname.herokuapp.com' + url, data)
  .then(function(response) {
    if (response.statusCode < 300) {
      return response.content.toJSON();
    }
    else {
      var p = Promise.reject({ errorMessage:'network error', response:response});
      console.log('network error - status:', response);
      navigator.showNetworkError();
      return p;
    }
  },
  function(error) {
    console.log('network error - reason:', response);
    navigator.showNetworkError();
  })
  .catch(function(error) {
    console.log('network error - catch:', response);
    navigator.showNetworkError();
  });
}

exports.setGroupName = setGroupName;
exports.setGroup_id = setGroup_id;
exports.setDeviceId = setDeviceId;
exports.post = post;
