var http = require("http");

function doRequest(method, url, data, headers) {
  data = data || {};
  headers = headers || {};
  headers['Content-type'] = headers['Content-type'] || 'application/json';
  headers['Accept'] = headers['Accept'] || 'application/json';

  return http.request({
    url: url,
    method: method,
    headers: { "Content-Type": "application/json" },
    content: JSON.stringify(data)
  });
  /*
  .then(function(response) {
    //return response.content.toJSON();
  },
  function (e) {
    //console.log("Error occurred " + e);
  });
  */
}

function doGet(url, headers) {
  return doRequest('GET', url, null, headers);
}

function doPost(url, data, headers) {
  return doRequest('POST', url, data, headers);
}

function doPut(url, data, headers) {
  return doRequest('PUT', url, data, headers);
}

function doPatch(url, data, headers) {
  return doRequest('PATCH', url, data, headers);
}

function doDelete(url, headers) {
  return doRequest('DELETE', url, null, headers);
}

exports.get = doGet;
exports.post = doPost;
exports.put = doPut;
exports.patch = doPatch;
exports.delete = doDelete;
