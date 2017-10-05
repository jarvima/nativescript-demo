var modalCloseCallback;

exports.setModalCloseCallback = function(callback) {
  modalCloseCallback = callback;
}

exports.closeModal = function() {
  if (modalCloseCallback) {
    modalCloseCallback();
  }
}