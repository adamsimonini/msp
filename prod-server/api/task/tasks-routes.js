"use strict";

var _interopRequireWildcard = require("C:\\code\\msp\\node_modules\\@babel\\runtime-corejs2/helpers/interopRequireWildcard");

var _interopRequireDefault = require("C:\\code\\msp\\node_modules\\@babel\\runtime-corejs2/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var controller = _interopRequireWildcard(require("./task-controller"));

var router = _express.default.Router();

router.post('/task', controller.create);
router.get('/task', controller.index);
router.get('/task/:id', controller.show);
router.put('/task', controller.update);
router.delete('/task', controller.remove);
var _default = router;
exports.default = _default;