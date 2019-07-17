"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _default = function _default() {
  function isEmpty(value) {
    return !value || !value.trim();
  }

  function capitalize(word) {
    return word.charAt(0).toUpperCase();
  }
};

exports.default = _default;